-- AlterTable
ALTER TABLE "Handover" ADD COLUMN     "code" TEXT,
ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false;
