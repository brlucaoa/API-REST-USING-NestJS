/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `Operador` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Operador_cpf_key" ON "Operador"("cpf");
