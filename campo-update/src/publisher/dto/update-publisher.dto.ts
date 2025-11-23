import { PartialType } from '@nestjs/swagger';
import { updateOperadorDto } from './create-publisher.dto';
import { updateMissaoDto } from './create-publisher.dto'

export class UpdateOperadorPublisherDto extends PartialType(updateOperadorDto) {}
export class UpdateMissaoPublisherDto extends PartialType(updateMissaoDto) {}
