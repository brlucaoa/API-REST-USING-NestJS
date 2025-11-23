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
exports.PublisherController = void 0;
const common_1 = require("@nestjs/common");
const publisher_service_1 = require("./publisher.service");
const update_publisher_dto_1 = require("./dto/update-publisher.dto");
const update_publisher_dto_2 = require("./dto/update-publisher.dto");
const swagger_1 = require("@nestjs/swagger");
const common_2 = require("@nestjs/common");
let PublisherController = class PublisherController {
    publisherService;
    constructor(publisherService) {
        this.publisherService = publisherService;
    }
    async updateOperador(id, dto) {
        return this.publisherService.publishEvent('operador.updated', { id,
            ...dto });
    }
    async updateMissao(id, dto) {
        return this.publisherService.publishEvent('missao.updated', { id,
            ...dto, });
    }
};
exports.PublisherController = PublisherController;
__decorate([
    (0, common_1.Put)('operador-update/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar operador' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Operador atualizado com sucesso' }),
    __param(0, (0, common_1.Param)('id', common_2.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_publisher_dto_1.UpdateOperadorPublisherDto]),
    __metadata("design:returntype", Promise)
], PublisherController.prototype, "updateOperador", null);
__decorate([
    (0, common_1.Put)('missao-update/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Publica atualização de missão e operadores' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Missão atualizada com sucesso' }),
    __param(0, (0, common_1.Param)('id', common_2.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_publisher_dto_2.UpdateMissaoPublisherDto]),
    __metadata("design:returntype", Promise)
], PublisherController.prototype, "updateMissao", null);
exports.PublisherController = PublisherController = __decorate([
    (0, common_1.Controller)('Updater'),
    __metadata("design:paramtypes", [publisher_service_1.PublisherService])
], PublisherController);
//# sourceMappingURL=publisher.controller.js.map