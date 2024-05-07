import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Card, Layout, Page } from "@shopify/polaris";
import { authenticate } from "~/shopify.server";

export const loader: LoaderFunction = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  let response;

  try {
    response = await admin.graphql(
      `#graphql
      query {
        collections(first: 5) {
          edges {
            node {
              id
              title
              handle
              updatedAt
              sortOrder
            }
          }
        }
      }`,
    );

    const data: any = await response.json();
    console.log("data", data);
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

function Collection() {
  const collection: any = useLoaderData();

  console.log(collection);
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
