/*
  Warnings:

  - A unique constraint covering the columns `[accessToken]` on the table `DiscordSession` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "DiscordSession" ADD COLUMN     "accessToken" TEXT,
ADD COLUMN     "accessTokenExpiry" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "DiscordSession_accessToken_key" ON "DiscordSession"("accessToken");
