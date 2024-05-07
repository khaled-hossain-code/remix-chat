-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "shop" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "isOnline" BOOLEAN NOT NULL DEFAULT false,
    "scope" TEXT,
    "expires" TIMESTAMP(3),
    "accessToken" TEXT NOT NULL,
    "userId" BIGINT,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "shopify_id" BIGINT NOT NULL,
    "title" TEXT NOT NULL,
    "handle" TEXT NOT NULL,
    "body_html" TEXT NOT NULL,
    "published_scope" TEXT NOT NULL,
    "product_type" TEXT NOT NULL,
    "vendor" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "published_at" TIMESTAMP(3),
    "template_suffix" TEXT,
    "tags" TEXT,
    "status" TEXT NOT NULL,
    "admin_graphql_api_id" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_shopify_id_key" ON "Product"("shopify_id");
