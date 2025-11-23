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
exports.PostMissaoDto = exports.CreateMissaoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const statusmissao_enum_1 = require("../../operador/enums/statusmissao.enum");
class CreateMissaoDto {
    titulo;
    descricao;
    status;
    operadoresId;
}
exports.CreateMissaoDto = CreateMissaoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nome da Missao', example: 'Operacao tempestade' }),
    __metadata("design:type", String)
], CreateMissaoDto.prototype, "titulo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Descricao da missao', example: 'Missao de infiltracao' }),
    __metadata("design:type", String)
], CreateMissaoDto.prototype, "descricao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status da Missão', enum: statusmissao_enum_1.statusMissao, example: statusmissao_enum_1.statusMissao.ABERTA }),
    __metadata("design:type", String)
], CreateMissaoDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'IDs dos Opeadores', example: [1, 3, 5], type: [Number] }),
    __metadata("design:type", Array)
], CreateMissaoDto.prototype, "operadoresId", void 0);
class PostMissaoDto {
    titulo;
    descricao;
    status;
}
exports.PostMissaoDto = PostMissaoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nome da Missao', example: 'Operacao tempestade' }),
    __metadata("design:type", String)
], PostMissaoDto.prototype, "titulo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Descricao da missao', example: 'Missao de infiltracao' }),
    __metadata("design:type", String)
], PostMissaoDto.prototype, "descricao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Satus Operador', enum: statusmissao_enum_1.statusMissao, example: statusmissao_enum_1.statusMissao.ABERTA }),
    __metadata("design:type", String)
], PostMissaoDto.prototype, "status", void 0);
//# sourceMappingURL=create-missao.dto.js.map