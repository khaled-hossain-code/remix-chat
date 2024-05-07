import { prisma } from "./client";
// const seedData = [
//   {
//     "shopify_id": 9242881196314,
//     "title": "Gift Card",
//     "body_html": "This is a gift card for the store",
//     "vendor": "Snowboard Vendor",
//     "product_type": "",
//     "created_at": "2024-04-24T09:28:50-04:00",
//     "handle": "gift-card",
//     "updated_at": "2024-04-24T09:28:51-04:00",
//     "published_at": "2024-04-24T09:28:50-04:00",
//     "template_suffix": null,
//     "published_scope": "web",
//     "tags": "",
//     "status": "active",
//     "admin_graphql_api_id": "gid://shopify/Product/9242881196314",
//     "variants": [
//         {
//             "id": 48655290761498,
//             "product_id": 9242881196314,
//             "title": "$10",
//             "price": "10.00",
//             "sku": "",
//             "position": 1,
//             "inventory_policy": "deny",
//             "compare_at_price": null,
//             "fulfillment_service": "gift_card",
//             "inventory_management": null,
//             "option1": "$10",
//             "option2": null,
//             "option3": null,
//             "created_at": "2024-04-24T09:28:50-04:00",
//             "updated_at": "2024-04-24T09:28:50-04:00",
//             "taxable": false,
//             "barcode": null,
//             "grams": 0,
//             "weight": 0,
//             "weight_unit": "kg",
//             "inventory_item_id": 50702287700250,
//             "inventory_quantity": 0,
//             "old_inventory_quantity": 0,
//             "requires_shipping": false,
//             "admin_graphql_api_id": "gid://shopify/ProductVariant/48655290761498",
//             "image_id": null
//         },
//         {
//             "id": 48655290794266,
//             "product_id": 9242881196314,
//             "title": "$25",
//             "price": "25.00",
//             "sku": "",
//             "position": 2,
//             "inventory_policy": "deny",
//             "compare_at_price": null,
//             "fulfillment_service": "gift_card",
//             "inventory_management": null,
//             "option1": "$25",
//             "option2": null,
//             "option3": null,
//             "created_at": "2024-04-24T09:28:50-04:00",
//             "updated_at": "2024-04-24T09:28:50-04:00",
//             "taxable": false,
//             "barcode": null,
//             "grams": 0,
//             "weight": 0,
//             "weight_unit": "kg",
//             "inventory_item_id": 50702287733018,
//             "inventory_quantity": 0,
//             "old_inventory_quantity": 0,
//             "requires_shipping": false,
//             "admin_graphql_api_id": "gid://shopify/ProductVariant/48655290794266",
//             "image_id": null
//         },
//         {
//             "id": 48655290827034,
//             "product_id": 9242881196314,
//             "title": "$50",
//             "price": "50.00",
//             "sku": "",
//             "position": 3,
//             "inventory_policy": "deny",
//             "compare_at_price": null,
//             "fulfillment_service": "gift_card",
//             "inventory_management": null,
//             "option1": "$50",
//             "option2": null,
//             "option3": null,
//             "created_at": "2024-04-24T09:28:50-04:00",
//             "updated_at": "2024-04-24T09:28:50-04:00",
//             "taxable": false,
//             "barcode": null,
//             "grams": 0,
//             "weight": 0,
//             "weight_unit": "kg",
//             "inventory_item_id": 50702287765786,
//             "inventory_quantity": 0,
//             "old_inventory_quantity": 0,
//             "requires_shipping": false,
//             "admin_graphql_api_id": "gid://shopify/ProductVariant/48655290827034",
//             "image_id": null
//         },
//         {
//             "id": 48655290859802,
//             "product_id": 9242881196314,
//             "title": "$100",
//             "price": "100.00",
//             "sku": "",
//             "position": 4,
//             "inventory_policy": "deny",
//             "compare_at_price": null,
//             "fulfillment_service": "gift_card",
//             "inventory_management": null,
//             "option1": "$100",
//             "option2": null,
//             "option3": null,
//             "created_at": "2024-04-24T09:28:50-04:00",
//             "updated_at": "2024-04-24T09:28:50-04:00",
//             "taxable": false,
//             "barcode": null,
//             "grams": 0,
//             "weight": 0,
//             "weight_unit": "kg",
//             "inventory_item_id": 50702287798554,
//             "inventory_quantity": 0,
//             "old_inventory_quantity": 0,
//             "requires_shipping": false,
//             "admin_graphql_api_id": "gid://shopify/ProductVariant/48655290859802",
//             "image_id": null
//         }
//     ],
//     "options": [
//         {
//             "id": 11601391321370,
//             "product_id": 9242881196314,
//             "name": "Denominations",
//             "position": 1,
//             "values": [
//                 "$10",
//                 "$25",
//                 "$50",
//                 "$100"
//             ]
//         }
//     ],
//     "images": [
//         {
//             "id": 45501913858330,
//             "alt": "Gift card that shows text: Generated data gift card",
//             "position": 1,
//             "product_id": 9242881196314,
//             "created_at": "2024-04-24T09:28:50-04:00",
//             "updated_at": "2024-04-24T09:28:50-04:00",
//             "admin_graphql_api_id": "gid://shopify/ProductImage/45501913858330",
//             "width": 2881,
//             "height": 2881,
//             "src": "https://cdn.shopify.com/s/files/1/0873/8416/2586/files/gift_card.png?v=1713965330",
//             "variant_ids": []
//         }
//     ],
//     "image": {
//         "id": 45501913858330,
//         "alt": "Gift card that shows text: Generated data gift card",
//         "position": 1,
//         "product_id": 9242881196314,
//         "created_at": "2024-04-24T09:28:50-04:00",
//         "updated_at": "2024-04-24T09:28:50-04:00",
//         "admin_graphql_api_id": "gid://shopify/ProductImage/45501913858330",
//         "width": 2881,
//         "height": 2881,
//         "src": "https://cdn.shopify.com/s/files/1/0873/8416/2586/files/gift_card.png?v=1713965330",
//         "variant_ids": []
//     }
// }
// ]

export async function seed(productList) {
  for await (let product of productList) {
    const variantsData = product.variants.map((variant) => {
      return {
        shopify_id: variant.id,
        title: variant.title,
        price: parseFloat(variant.price),
        sku: variant.sku,
        position: variant.position,
        inventory_policy: variant.inventory_policy,
        compare_at_price: variant.compare_at_price,
        fulfillment_service: variant.fulfillment_service,
        inventory_management: variant.inventory_management,
        option1: variant.option1,
        option2: variant.option2,
        option3: variant.option3,
        created_at: variant.created_at,
        updated_at: variant.updated_at,
        taxable: variant.taxable,
        barcode: variant.barcode,
        grams: variant.grams,
        weight: variant.weight,
        weight_unit: variant.weight_unit,
        inventory_item_id: variant.inventory_item_id,
        inventory_quantity: variant.inventory_quantity,
        old_inventory_quantity: variant.old_inventory_quantity,
        requires_shipping: variant.requires_shipping,
        admin_graphql_api_id: variant.admin_graphql_api_id,
        image_id: variant.image_id,
      };
    });

    try {
      await prisma.product.create({
        data: {
          shopify_id: product.id,
          title: product.title,
          body_html: product.body_html,
          vendor: product.vendor,
          product_type: product.product_type,
          created_at: product.created_at,
          handle: product.handle,
          updated_at: product.updated_at,
          published_at: product.published_at,
          template_suffix: product.template_suffix,
          published_scope: product.published_scope,
          tags: product.tags,
          status: product.status,
          admin_graphql_api_id: product.admin_graphql_api_id,
          variants: {
            createMany: {
              data: variantsData,
            },
          },
        },
      });

      console.log("Seed data has been inserted successfully.");
    } catch (error) {
      console.error("Error seeding data:", error);
    } finally {
      await prisma.$disconnect();
    }
  }
}
