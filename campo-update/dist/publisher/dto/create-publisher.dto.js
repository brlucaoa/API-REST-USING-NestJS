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
exports.updateOperadorDto = exports.updateMissaoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../enums/enums");
const enums_2 = require("../enums/enums");
class updateMissaoDto {
    status;
    operadoresId;
}
exports.updateMissaoDto = updateMissaoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status da Missão', enum: enums_1.statusMissao, example: enums_1.statusMissao.ABERTA }),
    __metadata("design:type", String)
], updateMissaoDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'IDs dos Opeadores', example: [1, 3, 5], type: [Number] }),
    __metadata("design:type", Array)
], updateMissaoDto.prototype, "operadoresId", void 0);
class updateOperadorDto {
    status;
}
exports.updateOperadorDto = updateOperadorDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status Operador', enum: enums_2.statusOperador, example: enums_2.statusOperador.ATIVO }),
    __metadata("design:type", String)
], updateOperadorDto.prototype, "status", void 0);
//# sourceMappingURL=create-publisher.dto.js.map