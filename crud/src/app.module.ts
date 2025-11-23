import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { OperadorModule } from './operador/operador.module';
import { MissaoModule } from './missao/missao.module';

@Module({
  imports: [PrismaModule, OperadorModule, MissaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
