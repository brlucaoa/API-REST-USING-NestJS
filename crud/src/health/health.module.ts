import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health.controller';
import { MyLoggerService } from '../common/logger/my-logger.service';

@Module({
  imports: [TerminusModule],
  controllers: [HealthController],
  providers: [MyLoggerService],
})
export class HealthModule {}