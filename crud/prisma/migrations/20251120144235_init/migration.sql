-- CreateEnum
CREATE TYPE "StatusMissao" AS ENUM ('ABERTA', 'ANDAMENTO', 'FECHADA');

-- CreateTable
CREATE TABLE "Missao" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "data" TIMESTAMP(3) NOT NULL,
    "status" "StatusMissao" NOT NULL DEFAULT 'ABERTA',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Missao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_OperadoresMissoes" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_OperadoresMissoes_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_OperadoresMissoes_B_index" ON "_OperadoresMissoes"("B");

-- AddForeignKey
ALTER TABLE "_OperadoresMissoes" ADD CONSTRAINT "_OperadoresMissoes_A_fkey" FOREIGN KEY ("A") REFERENCES "Missao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OperadoresMissoes" ADD CONSTRAINT "_OperadoresMissoes_B_fkey" FOREIGN KEY ("B") REFERENCES "Operador"("id") ON DELETE CASCADE ON UPDATE CASCADE;
