-- CreateTable
CREATE TABLE "GuildLog" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guildsId" TEXT,

    CONSTRAINT "GuildLog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GuildLog" ADD CONSTRAINT "GuildLog_guildsId_fkey" FOREIGN KEY ("guildsId") REFERENCES "Guilds"("id") ON DELETE SET NULL ON UPDATE CASCADE;
