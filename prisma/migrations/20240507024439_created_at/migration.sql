/*
  Warnings:

  - You are about to drop the column `createdAt` on the `ProductVariant` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `ProductVariant` table. All the data in the column will be lost.
  - Added the required column `created_at` to the `ProductVariant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `ProductVariant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductVariant" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
