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
exports.CreateOperadorDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const patente_enum_1 = require("../enums/patente.enum");
const statusoperador_enum_1 = require("../enums/statusoperador.enum");
class CreateOperadorDto {
    name;
    email;
    cpf;
    patente;
    status;
}
exports.CreateOperadorDto = CreateOperadorDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nome do Operador', example: 'Lucas Gomes' }),
    __metadata("design:type", String)
], CreateOperadorDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'E-mail do Operador', example: 'lucas@mail.com' }),
    __metadata("design:type", String)
], CreateOperadorDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'CPF do Operador', example: '000.000.000-00' }),
    __metadata("design:type", String)
], CreateOperadorDto.prototype, "cpf", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Patente Operador', enum: patente_enum_1.Patente, example: patente_enum_1.Patente.SOLDADO_I }),
    __metadata("design:type", String)
], CreateOperadorDto.prototype, "patente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Satus Operador', enum: statusoperador_enum_1.statusOperador, example: statusoperador_enum_1.statusOperador.ATIVO }),
    __metadata("design:type", String)
], CreateOperadorDto.prototype, "status", void 0);
//# sourceMappingURL=create-operador.dto.js.map