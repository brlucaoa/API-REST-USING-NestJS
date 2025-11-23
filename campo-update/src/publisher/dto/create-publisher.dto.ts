import { ApiProperty } from '@nestjs/swagger';
import { statusMissao } from '../enums/enums';
import { statusOperador } from '../enums/enums';

export class updateMissaoDto {
  @ApiProperty({ description: 'Status da Missão', enum: statusMissao, example: statusMissao.ABERTA })
  status: statusMissao;

  @ApiProperty({ description: 'IDs dos Opeadores', example: [1, 3, 5], type: [Number] })
  operadoresId: number[];
}

export class updateOperadorDto {
  @ApiProperty({ description: 'Status Operador', enum: statusOperador, example: statusOperador.ATIVO })
  status: statusOperador;
}