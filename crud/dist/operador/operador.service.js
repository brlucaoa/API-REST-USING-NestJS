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
exports.OperadorService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let OperadorService = class OperadorService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        try {
            return await this.prisma.operador.create({ data });
        }
        catch (error) {
            if (error.code === 'P2002') {
                const campoDuplicado = error.meta.target[0];
                if (campoDuplicado === 'email') {
                    throw new common_1.ConflictException('Email já existe');
                }
                if (campoDuplicado === 'cpf') {
                    throw new common_1.ConflictException('CPF já existe');
                }
            }
            throw error;
        }
    }
    findAll() {
        return this.prisma.operador.findMany({ orderBy: { createdAt: 'desc' }, include: { missoes: true } });
    }
    async findOne(id) {
        const operador = await this.prisma.operador.findUnique({ where: { id }, include: { missoes: true } });
        if (!operador) {
            throw new common_1.NotFoundException('Operador não encontrado');
        }
        return operador;
    }
    update(id, data) {
        return this.prisma.operador.update({ where: { id }, data });
    }
    async remove(id) {
        try {
            return await this.prisma.operador.delete({ where: { id } });
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Operador não encontrado', { cause: new Error('Operador não existe'), description: 'Foi tentado apagar um operador que não existe.' });
            }
            throw error;
        }
    }
};
exports.OperadorService = OperadorService;
exports.OperadorService = OperadorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OperadorService);
//# sourceMappingURL=operador.service.js.map