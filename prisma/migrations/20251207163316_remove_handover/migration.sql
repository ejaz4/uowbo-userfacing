/*
  Warnings:

  - You are about to drop the `Handover` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Handover" DROP CONSTRAINT "Handover_discordUserId_fkey";

-- DropTable
DROP TABLE "Handover";
