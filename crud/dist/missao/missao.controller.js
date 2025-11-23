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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissaoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const missao_service_1 = require("./missao.service");
const create_missao_dto_1 = require("./dto/create-missao.dto");
const update_missao_dto_1 = require("./dto/update-missao.dto");
let MissaoController = class MissaoController {
    missaoService;
    constructor(missaoService) {
        this.missaoService = missaoService;
    }
    create(dto) {
        return this.missaoService.create(dto);
    }
    addOperador(id, operadorId) {
        return this.missaoService.addOperador(id, operadorId);
    }
    findAll() {
        return this.missaoService.findAll();
    }
    findOne(id) {
        return this.missaoService.findOne(id);
    }
    async update(id, dto) {
        return this.missaoService.update(id, dto);
    }
    remove(id) {
        return this.missaoService.remove(id);
    }
};
exports.MissaoController = MissaoController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar missão' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Missão criada com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Missão já existe' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_missao_dto_1.PostMissaoDto]),
    __metadata("design:returntype", void 0)
], MissaoController.prototype, "create", null);
__decorate([
    (0, common_1.Post)(':id/operador/:operadorId'),
    (0, swagger_1.ApiOperation)({ summary: 'Adicionar operador a uma missão' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Operador adicionado com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Missão ou operador não encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('operadorId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], MissaoController.prototype, "addOperador", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todas as missões' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MissaoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar missão por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Missão encontrada com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Missão não encontrada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MissaoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar missão e operadores' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Missão atualizada com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Missão não encontrada ou operadores são inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Missão já existe com o mesmo título.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_missao_dto_1.UpdateMissaoDto]),
    __metadata("design:returntype", Promise)
], MissaoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Deletar missão' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Missão deletada com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Missão não encontrada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MissaoController.prototype, "remove", null);
exports.MissaoController = MissaoController = __decorate([
    (0, swagger_1.ApiTags)('Missões'),
    (0, common_1.Controller)('missao'),
    __metadata("design:paramtypes", [missao_service_1.MissaoService])
], MissaoController);
//# sourceMappingURL=missao.controller.js.map