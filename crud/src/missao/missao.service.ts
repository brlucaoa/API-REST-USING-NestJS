import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostMissaoDto } from './dto/create-missao.dto';
import { CreateMissaoDto } from './dto/create-missao.dto';
import { UpdateMissaoDto } from './dto/update-missao.dto';
import { Prisma } from '@prisma/client';


@Injectable()
export class MissaoService {
  constructor(private prisma: PrismaService) {
  }

  async create(dto: PostMissaoDto) {
    try {
      return await this.prisma.missao.create({
        data: { titulo: dto.titulo, descricao: dto.descricao },
        include: { operadores: true },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          const target = error.meta?.target;
          const campoDuplicado = Array.isArray(target) ? target[0] : target;
          if (campoDuplicado === 'titulo') {
            throw new ConflictException('Missão já existe');
          }
        }
      }
      throw error;
    }
  }

  async addOperador(missaoId: number, operadorId: number) {
    const missao = await this.prisma.missao.findUnique({ where: { id: missaoId } });
    if (!missao) throw new NotFoundException('Missão não encontrada');
    const operador = await this.prisma.operador.findUnique({
      where: { id: operadorId },
    });
    if (!operador) throw new NotFoundException('Operador não encontrado');
    try {
      return await this.prisma.missao.update({
        where: { id: missaoId },
        data: {
          operadores: {
            connect: { id: operadorId },
          },
        },
        include: { operadores: true },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Operador já está vinculado a esta missão');
      }
      throw error;
    }
  }

  async findAll() {
    return this.prisma.missao.findMany({
      include: { operadores: true },
    });
  }

  async findOne(id: number) {
    const missao = await this.prisma.missao.findUnique({
      where: { id }, include: { operadores: true },
    });
    if (!missao) {
      throw new NotFoundException('Missão não econtrada');
    }
    return missao;
  }


  async update(id: number, dto: UpdateMissaoDto) {
    try {
      return await this.prisma.missao.update({
        where: { id },
        data: {
          titulo: dto.titulo,
          descricao: dto.descricao,
          ...(dto.operadoresId && {
            operadores: {
              set: dto.operadoresId.map((id) => ({ id })),
            },
          }),
        },
        include: { operadores: true },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(
          'Missão não encontrada ou alguns operadores são inválidos.',
        );
      }
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          const target = error.meta?.target;
          const campoDuplicado = Array.isArray(target) ? target[0] : target;
          if (campoDuplicado === 'titulo') {
            throw new ConflictException('Missão já existe');
          }
          throw error;
        }
      }
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.missao.delete({ where: { id } });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Missão não encontrada', {
          cause: new Error('Misão não existe'),
          description: 'Foi tentado excluir uma missão inexistente',
        });
      }
      throw error;
    }
  }
}


