import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateOperadorDto } from './dto/create-operador.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class OperadorService {
  constructor(private prisma: PrismaService) {
  }

  async create(data: CreateOperadorDto) {
    try {
      return await this.prisma.operador.create({ data });
    } catch (error) {
      if (error.code === 'P2002') {
        const campoDuplicado = error.meta.target[0];
        if (campoDuplicado === 'email') {
          throw new ConflictException('Email já existe');
        }
        if (campoDuplicado === 'cpf') {
          throw new ConflictException('CPF já existe');
        }
      }
      throw error;
    }
  }

  findAll() {
    return this.prisma.operador.findMany({ orderBy: { createdAt: 'desc' }, include: { missoes: true } });
  }

  async findOne(id: number) {
    const operador= await this.prisma.operador.findUnique
    ({ where: { id }, include: { missoes: true } });
    if (!operador) {
      throw new NotFoundException ('Operador não encontrado');
    }
    return operador;
  }

  update(id: number, data: Partial<CreateOperadorDto>) {
    return this.prisma.operador.update({ where: { id }, data });
  }

  async remove(id: number) {
    try {
      return await this.prisma.operador.delete({ where: { id } });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Operador não encontrado',
          { cause: new Error('Operador não existe'), description: 'Foi tentado apagar um operador que não existe.' });
      }
      throw error;
    }
  }
}
