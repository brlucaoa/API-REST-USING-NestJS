import { Module } from '@nestjs/common';
import { OperadorService } from './operador.service';
import { OperadorController } from './operador.controller';

@Module({
  controllers: [OperadorController],
  providers: [OperadorService],
})
export class OperadorModule {}
