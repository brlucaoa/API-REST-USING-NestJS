"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('CRUD')
        .setDescription('CRUD OPERADOR, MISSAO')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
    console.log('Server running on http://localhost:3000');
    console.log('Swagger docs available at http://localhost:3000/api');
    app.connectMicroservice({
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: ['amqps://suhtprle:j8Cp4FsjEwZM6tP229VggQZBlHjH4UvZ@jackal.rmq.cloudamqp.com/suhtprle'],
            queue: 'campo_update',
            queueOptions: { durable: true },
        },
    });
    await app.startAllMicroservices();
    const port = process.env.PORT || 3001;
    console.log(`Updates rodando na porta ${port}`);
    console.log(`Escutando eventos na fila campo_update`);
}
bootstrap();
//# sourceMappingURL=main.js.map