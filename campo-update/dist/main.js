"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API UPDATE')
        .setDescription('API DE UPDATE DE OPERADOR E MISSÃO')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api-update', app, document);
    const port = process.env.PORT || 3002;
    await app.listen(port);
    console.log(`Publisher Service rodando na porta: ${port}`);
    console.log(`Endpoints disponíveis: em http://localhost:${port}/api-update`);
}
bootstrap();
//# sourceMappingURL=main.js.map