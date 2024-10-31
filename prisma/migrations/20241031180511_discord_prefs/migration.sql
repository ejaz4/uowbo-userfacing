/*
  Warnings:

  - Added the required column `avatar` to the `DiscordUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `DiscordUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DiscordUser" ADD COLUMN     "avatar" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;
