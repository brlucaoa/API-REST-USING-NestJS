"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMissaoPublisherDto = exports.UpdateOperadorPublisherDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_publisher_dto_1 = require("./create-publisher.dto");
const create_publisher_dto_2 = require("./create-publisher.dto");
class UpdateOperadorPublisherDto extends (0, swagger_1.PartialType)(create_publisher_dto_1.updateOperadorDto) {
}
exports.UpdateOperadorPublisherDto = UpdateOperadorPublisherDto;
class UpdateMissaoPublisherDto extends (0, swagger_1.PartialType)(create_publisher_dto_2.updateMissaoDto) {
}
exports.UpdateMissaoPublisherDto = UpdateMissaoPublisherDto;
//# sourceMappingURL=update-publisher.dto.js.map