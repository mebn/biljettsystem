/*
  Warnings:

  - You are about to drop the column `x` on the `eventLocation` table. All the data in the column will be lost.
  - You are about to drop the column `y` on the `eventLocation` table. All the data in the column will be lost.
  - Added the required column `lat` to the `eventLocation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lng` to the `eventLocation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "eventLocation" DROP COLUMN "x",
DROP COLUMN "y",
ADD COLUMN     "lat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "lng" DOUBLE PRECISION NOT NULL;
