-- AlterTable
ALTER TABLE "UniversityUser" ADD COLUMN     "code" TEXT,
ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false;
