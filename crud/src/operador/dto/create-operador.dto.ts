import { ApiProperty } from '@nestjs/swagger';
import { Patente } from '../enums/patente.enum';
import { statusOperador } from '../enums/statusoperador.enum';

export class CreateOperadorDto {

  @ApiProperty({ description: 'Nome do Operador', example: 'Lucas Gomes' })
  name: string;

  @ApiProperty({ description: 'E-mail do Operador', example: 'lucas@mail.com' })
  email: string;

  @ApiProperty({ description: 'CPF do Operador', example: '000.000.000-00' })
  cpf: string;

  @ApiProperty({ description: 'Patente Operador', enum: Patente, example: Patente.SOLDADO_I })
  patente: Patente;

  @ApiProperty({ description: 'Satus Operador', enum: statusOperador, example: statusOperador.ATIVO })
  status: statusOperador;

}
