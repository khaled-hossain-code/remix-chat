import type { ActionFunction } from "@remix-run/node";
import {
  Form,
  useActionData,
  useLoaderData,
  useSubmit,
} from "@remix-run/react";
import { Button, Card, Layout, Page } from "@shopify/polaris";
import { authenticate } from "~/shopify.server";

export const action: ActionFunction = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  let response;

  try {
    response = await admin.graphql(
      `#graphql
      mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {
        discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {
          codeAppDiscount {
            discountId
            title
            appDiscountType {
              description
              functionId
            }
            combinesWith {
              orderDiscounts
              productDiscounts
              shippingDiscounts
            }
            codes(first: 100) {
              nodes {
                code
              }
            }
            status
            usageLimit
          }
          userErrors {
            field
            message
          }
        }
      }`,
      {
        variables: {
          codeAppDiscount: {
            code: "APP_DISCOUNT",
            title: "Take 5$ from order discount",
            functionId: "85725f3f-107b-4950-9a18-d9cedcc5da45",
            appliesOncePerCustomer: true,
            combinesWith: {
              orderDiscounts: true,
              productDiscounts: true,
              shippingDiscounts: true,
            },
            startsAt: "2024-02-02T17:09:21Z",
            endsAt: "2024-10-10T17:09:21Z",
            usageLimit: 1,
            metafields: [
              {
                namespace: "default",
                key: "function-configuration",
                type: "json",
                value:
                  '{"discounts":[{"value":{"fixedAmount":{"amount":5}},"targets":\n                      [{"orderSubtotal":{"excludedVariantIds":[]}}]}],"discountApplicationStrategy":"FIRST"}',
              },
            ],
          },
        },
      },
    );

    const data: any = await response.json();
    console.log("data", data);
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

function Discounts() {
  const submit = useSubmit();
  const actionData = useActionData<typeof action>();

  const generateDiscount = () =>
    submit(
      {},
      {
        replace: true,
        method: "POST",
      },
    );
  console.log(actionData);
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Card>
            <h1>Discounts</h1>
            <Form onSubmit={generateDiscount} method="POST">
              <Button submit>Create Discount</Button>
            </Form>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

export default Discounts;
