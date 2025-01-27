/*
  Warnings:

  - You are about to drop the column `code` on the `DiscordUniversity` table. All the data in the column will be lost.
  - You are about to drop the column `universityUserId` on the `DiscordUniversity` table. All the data in the column will be lost.
  - You are about to drop the `DiscordBiometric` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UniversityUser` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[studentId]` on the table `DiscordUniversity` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "DiscordBiometric" DROP CONSTRAINT "DiscordBiometric_biometricEntryId_fkey";

-- DropForeignKey
ALTER TABLE "DiscordBiometric" DROP CONSTRAINT "DiscordBiometric_discordUserId_fkey";

-- DropForeignKey
ALTER TABLE "DiscordUniversity" DROP CONSTRAINT "DiscordUniversity_universityUserId_fkey";

-- AlterTable
ALTER TABLE "DiscordUniversity" DROP COLUMN "code",
DROP COLUMN "universityUserId",
ADD COLUMN     "biometricEntryId" TEXT,
ADD COLUMN     "emailCode" TEXT,
ADD COLUMN     "emailVerificationId" TEXT,
ADD COLUMN     "studentId" TEXT;

-- DropTable
DROP TABLE "DiscordBiometric";

-- DropTable
ALTER TABLE "UniversityUser" RENAME TO "EmailVerification";


-- CreateTable
CREATE TABLE "ModeratorLogs" (
    "id" TEXT NOT NULL,
    "discordId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ModeratorLogs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EmailVerification_email_key" ON "EmailVerification"("email");

-- CreateIndex
CREATE UNIQUE INDEX "DiscordUniversity_studentId_key" ON "DiscordUniversity"("studentId");

-- AddForeignKey
ALTER TABLE "DiscordUniversity" ADD CONSTRAINT "DiscordUniversity_emailVerificationId_fkey" FOREIGN KEY ("emailVerificationId") REFERENCES "EmailVerification"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscordUniversity" ADD CONSTRAINT "DiscordUniversity_biometricEntryId_fkey" FOREIGN KEY ("biometricEntryId") REFERENCES "BiometricEntry"("id") ON DELETE SET NULL ON UPDATE CASCADE;
