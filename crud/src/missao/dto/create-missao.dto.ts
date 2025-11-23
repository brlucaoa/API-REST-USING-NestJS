import { ApiProperty } from '@nestjs/swagger';
import { statusMissao } from '../../operador/enums/statusmissao.enum';

export class CreateMissaoDto {
  @ApiProperty({ description: 'Nome da Missao', example: 'Operacao tempestade' })
  titulo: string;

  @ApiProperty({ description: 'Descricao da missao', example: 'Missao de infiltracao' })
  descricao: string;

  @ApiProperty({ description: 'Status da Missão', enum: statusMissao, example: statusMissao.ABERTA })
  status: statusMissao;

  @ApiProperty({ description: 'IDs dos Opeadores', example: [1, 3, 5], type: [Number] })
  operadoresId: number[];
}

export class PostMissaoDto {
  @ApiProperty({ description: 'Nome da Missao', example: 'Operacao tempestade' })
  titulo: string;

  @ApiProperty({ description: 'Descricao da missao', example: 'Missao de infiltracao' })
  descricao: string;

  @ApiProperty({ description: 'Satus Operador', enum: statusMissao, example: statusMissao.ABERTA })
  status: statusMissao;

}

