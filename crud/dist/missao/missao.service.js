"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissaoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let MissaoService = class MissaoService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        try {
            return await this.prisma.missao.create({
                data: { titulo: dto.titulo, descricao: dto.descricao },
                include: { operadores: true },
            });
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    const target = error.meta?.target;
                    const campoDuplicado = Array.isArray(target) ? target[0] : target;
                    if (campoDuplicado === 'titulo') {
                        throw new common_1.ConflictException('Missão já existe');
                    }
                }
            }
            throw error;
        }
    }
    async addOperador(missaoId, operadorId) {
        const missao = await this.prisma.missao.findUnique({ where: { id: missaoId } });
        if (!missao)
            throw new common_1.NotFoundException('Missão não encontrada');
        const operador = await this.prisma.operador.findUnique({
            where: { id: operadorId },
        });
        if (!operador)
            throw new common_1.NotFoundException('Operador não encontrado');
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
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_1.ConflictException('Operador já está vinculado a esta missão');
            }
            throw error;
        }
    }
    async findAll() {
        return this.prisma.missao.findMany({
            include: { operadores: true },
        });
    }
    async findOne(id) {
        const missao = await this.prisma.missao.findUnique({
            where: { id }, include: { operadores: true },
        });
        if (!missao) {
            throw new common_1.NotFoundException('Missão não econtrada');
        }
        return missao;
    }
    async update(id, dto) {
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
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Missão não encontrada ou alguns operadores são inválidos.');
            }
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    const target = error.meta?.target;
                    const campoDuplicado = Array.isArray(target) ? target[0] : target;
                    if (campoDuplicado === 'titulo') {
                        throw new common_1.ConflictException('Missão já existe');
                    }
                    throw error;
                }
            }
        }
    }
    async remove(id) {
        try {
            return await this.prisma.missao.delete({ where: { id } });
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Missão não encontrada', {
                    cause: new Error('Misão não existe'),
                    description: 'Foi tentado excluir uma missão inexistente',
                });
            }
            throw error;
        }
    }
};
exports.MissaoService = MissaoService;
exports.MissaoService = MissaoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MissaoService);
//# sourceMappingURL=missao.service.js.map