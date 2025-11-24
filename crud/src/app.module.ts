import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { OperadorModule } from './operador/operador.module';
import { MissaoModule } from './missao/missao.module';
import { MyLoggerService } from './common/logger/my-logger.service';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { HealthModule } from './health/health.module';
import { TerminusModule } from '@nestjs/terminus';
import { MetricsModule } from './metrics/metrics.module';

@Module({
  imports: [PrismaModule, OperadorModule, MissaoModule, HealthModule, MetricsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: MyLoggerService,
      useValue: new MyLoggerService (),
    },

    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
