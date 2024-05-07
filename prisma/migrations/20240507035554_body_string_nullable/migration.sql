/*
  Warnings:

  - A unique constraint covering the columns `[shopify_id]` on the table `ProductVariant` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "body_html" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariant_shopify_id_key" ON "ProductVariant"("shopify_id");
