import { Module } from '@nestjs/common';
import { MissaoService } from './missao.service';
import { MissaoController } from './missao.controller';

@Module({
  controllers: [MissaoController],
  providers: [MissaoService],
})
export class MissaoModule {}
