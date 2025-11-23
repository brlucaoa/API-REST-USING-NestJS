"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMissaoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_missao_dto_1 = require("./create-missao.dto");
class UpdateMissaoDto extends (0, swagger_1.PartialType)(create_missao_dto_1.CreateMissaoDto) {
}
exports.UpdateMissaoDto = UpdateMissaoDto;
//# sourceMappingURL=update-missao.dto.js.map