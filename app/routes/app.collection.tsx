import type { LoaderFunction } from "@remix-run/node";
import { Card, Layout, Page } from "@shopify/polaris";
import { authenticate } from "~/shopify.server";

export const loader: LoaderFunction = async ({ request }) => {
  const { session } = await authenticate.admin(request);
  console.log(session);
  return session;
};

function Collection() {
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Card>
            <h1>Collection</h1>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

export default Collection;
