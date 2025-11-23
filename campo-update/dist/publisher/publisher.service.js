"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var PublisherService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublisherService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let PublisherService = PublisherService_1 = class PublisherService {
    logger = new common_1.Logger(PublisherService_1.name);
    client;
    constructor() {
        this.client = microservices_1.ClientProxyFactory.create({
            transport: microservices_1.Transport.RMQ,
            options: {
                urls: ['amqps://suhtprle:j8Cp4FsjEwZM6tP229VggQZBlHjH4UvZ@jackal.rmq.cloudamqp.com/suhtprle'],
                queue: 'campo_update',
                queueOptions: { durable: true },
            },
        });
    }
    async onModuleInit() {
        await this.client.connect();
        this.logger.log('Publisher conectado.');
    }
    async publishEvent(eventType, data) {
        const event = {
            type: eventType,
            data: data,
            timestamp: new Date().toISOString(),
        };
        this.logger.log(`Publicando evento: ${eventType}.`, event);
        await this.client.emit('campo_update', event);
        return {
            success: true,
            message: `Evento ${eventType} publicado com sucesso`,
            event: event,
        };
    }
};
exports.PublisherService = PublisherService;
exports.PublisherService = PublisherService = PublisherService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PublisherService);
//# sourceMappingURL=publisher.service.js.map