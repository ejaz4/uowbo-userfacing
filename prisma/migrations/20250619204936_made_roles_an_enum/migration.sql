/*
  Warnings:

  - You are about to drop the column `isAttending` on the `EventMember` table. All the data in the column will be lost.
  - You are about to drop the column `isGuest` on the `EventMember` table. All the data in the column will be lost.
  - You are about to drop the column `isHost` on the `EventMember` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "EventRole" AS ENUM ('ATENDEE', 'HOST', 'ORGANISER');

-- AlterTable
ALTER TABLE "EventMember" DROP COLUMN "isAttending",
DROP COLUMN "isGuest",
DROP COLUMN "isHost",
ADD COLUMN     "role" "EventRole" NOT NULL DEFAULT 'ATENDEE';
