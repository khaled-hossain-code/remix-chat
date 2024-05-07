-- CreateTable
CREATE TABLE "ProductVariant" (
    "id" TEXT NOT NULL,
    "shopify_id" BIGINT NOT NULL,
    "product_id" BIGINT NOT NULL,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "sku" TEXT,
    "position" INTEGER NOT NULL,
    "inventory_policy" TEXT NOT NULL,
    "compare_at_price" TEXT,
    "fulfillment_service" TEXT NOT NULL,
    "inventory_management" TEXT,
    "option1" TEXT,
    "option2" TEXT,
    "option3" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "taxable" BOOLEAN NOT NULL,
    "barcode" TEXT,
    "grams" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "weight_unit" TEXT NOT NULL,
    "inventory_item_id" INTEGER NOT NULL,
    "inventory_quantity" INTEGER NOT NULL,
    "old_inventory_quantity" INTEGER NOT NULL,
    "requires_shipping" BOOLEAN NOT NULL,
    "admin_graphql_api_id" TEXT NOT NULL,
    "image_id" BIGINT,

    CONSTRAINT "ProductVariant_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductVariant" ADD CONSTRAINT "ProductVariant_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("shopify_id") ON DELETE RESTRICT ON UPDATE CASCADE;
