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
exports.OperadorController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const operador_service_1 = require("./operador.service");
const create_operador_dto_1 = require("./dto/create-operador.dto");
const common_2 = require("@nestjs/common");
const update_operador_dto_1 = require("./dto/update-operador.dto");
let OperadorController = class OperadorController {
    operadorService;
    constructor(operadorService) {
        this.operadorService = operadorService;
    }
    create(dto) {
        return this.operadorService.create(dto);
    }
    findAll() {
        return this.operadorService.findAll();
    }
    findOne(id) {
        return this.operadorService.findOne(+id);
    }
    update(id, dto) {
        return this.operadorService.update(id, dto);
    }
    remove(id) {
        return this.operadorService.remove(id);
    }
};
exports.OperadorController = OperadorController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar operador' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Operador criado com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Email ou CPF já existem' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_operador_dto_1.CreateOperadorDto]),
    __metadata("design:returntype", void 0)
], OperadorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os operadores' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Lista de operadores' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OperadorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Busca operador por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Operador encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Operador não encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OperadorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar operador' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Operador atualizado com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Operador não encontrado' }),
    __param(0, (0, common_1.Param)('id', common_2.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_operador_dto_1.UpdateOperadorDto]),
    __metadata("design:returntype", void 0)
], OperadorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Deletar operador' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Operador deletado com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Operador não encontrado' }),
    __param(0, (0, common_1.Param)('id', common_2.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OperadorController.prototype, "remove", null);
exports.OperadorController = OperadorController = __decorate([
    (0, swagger_1.ApiTags)('Operador'),
    (0, common_1.Controller)('operador'),
    __metadata("design:paramtypes", [operador_service_1.OperadorService])
], OperadorController);
//# sourceMappingURL=operador.controller.js.map