-- CreateTable
CREATE TABLE "DiscordUser" (
    "id" TEXT NOT NULL,
    "discordId" TEXT NOT NULL,
    "universityUserId" TEXT NOT NULL,

    CONSTRAINT "DiscordUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UniversityUser" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "UniversityUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Handover" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "discordUserId" TEXT,

    CONSTRAINT "Handover_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DiscordUser_discordId_key" ON "DiscordUser"("discordId");

-- CreateIndex
CREATE UNIQUE INDEX "UniversityUser_email_key" ON "UniversityUser"("email");

-- AddForeignKey
ALTER TABLE "DiscordUser" ADD CONSTRAINT "DiscordUser_universityUserId_fkey" FOREIGN KEY ("universityUserId") REFERENCES "UniversityUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Handover" ADD CONSTRAINT "Handover_discordUserId_fkey" FOREIGN KEY ("discordUserId") REFERENCES "DiscordUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;
