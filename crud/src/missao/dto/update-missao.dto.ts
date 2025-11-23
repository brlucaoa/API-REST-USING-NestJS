import { PartialType } from '@nestjs/swagger';
import { CreateMissaoDto } from './create-missao.dto';

export class UpdateMissaoDto extends PartialType(CreateMissaoDto) {
}
