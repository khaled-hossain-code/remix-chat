import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Card, Layout, Page } from "@shopify/polaris";
import { seed } from "prisma/seed";
import { authenticate } from "~/shopify.server";

export async function loader({ request }) {
  const { admin, session } = await authenticate.admin(request);
  const data = await admin.rest.resources.Product.all({ session, limit: 200 });
  const productList = data.data;

  await seed(productList);

  return json({});
}

function Products() {
  const products: any = useLoaderData();

  console.log(products);
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Card>
            <h1>Products</h1>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

export default Products;
