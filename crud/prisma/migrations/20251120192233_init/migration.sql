/*
  Warnings:

  - A unique constraint covering the columns `[titulo]` on the table `Missao` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Missao_titulo_key" ON "Missao"("titulo");
