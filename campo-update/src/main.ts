import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API UPDATE')
    .setDescription('API DE UPDATE DE OPERADOR E MISSÃO')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-update', app, document);

  const port = process.env.PORT || 3002;
  await app.listen(port);

  console.log(`Publisher Service rodando na porta: ${port}`);
  console.log(`Endpoints disponíveis: em http://localhost:${port}/api-update`);
}
bootstrap();
