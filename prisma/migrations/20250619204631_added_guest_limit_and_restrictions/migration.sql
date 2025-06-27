-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "guestLimit" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "isAcceptingExternals" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isAcceptingInternals" BOOLEAN NOT NULL DEFAULT true;
