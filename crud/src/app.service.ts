import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { CreateOperadorDto } from './operador/dto/create-operador.dto';
import { UpdateMissaoDto } from './missao/dto/update-missao.dto';


@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(private readonly prisma: PrismaService) {
  }

  async updatingOperador(id: number, data: Partial<CreateOperadorDto>) {
    this.logger.log(`Atualizando operador ID ${id}`);
    return this.prisma.operador.update({ where: { id }, data });
  }

  async updatingMissao(id: number, dto: UpdateMissaoDto) {
    this.logger.log(`Atualizando Missao e Operadores`)
    const updated = await this.prisma.missao.update({
      where: { id },
      data: {
        status: dto.status, ...(dto.operadoresId && {
          operadores: {
            set: dto.operadoresId.map((operador) => ({ id: operador })),
          },
        }),
      },
      include: {
        operadores: true,
      },
    });
    return {
      message: 'Missão atualizada com sucesso',
      updated,
    };
  }
}
