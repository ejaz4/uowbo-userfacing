/*
  Warnings:

  - You are about to drop the column `code` on the `UniversityUser` table. All the data in the column will be lost.
  - You are about to drop the column `isVerified` on the `UniversityUser` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DiscordUniversity" ADD COLUMN     "code" TEXT,
ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "UniversityUser" DROP COLUMN "code",
DROP COLUMN "isVerified";
