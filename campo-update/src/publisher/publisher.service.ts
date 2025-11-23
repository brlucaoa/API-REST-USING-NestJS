import {Injectable, OnModuleInit, Logger} from '@nestjs/common';
import {ClientProxy, ClientProxyFactory, Transport} from '@nestjs/microservices';
import {updateMissaoDto} from './dto/create-publisher.dto';
import {updateOperadorDto} from './dto/create-publisher.dto';
import {UpdateOperadorPublisherDto} from './dto/update-publisher.dto';
import {UpdateMissaoPublisherDto} from './dto/update-publisher.dto';


@Injectable()
export class PublisherService {
    private readonly logger = new Logger(PublisherService.name);
    private readonly client: ClientProxy;

    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: ['amqps://suhtprle:j8Cp4FsjEwZM6tP229VggQZBlHjH4UvZ@jackal.rmq.cloudamqp.com/suhtprle'],
                queue: 'campo_update',
                queueOptions: {durable: true},
            },
        });
    }

    async onModuleInit() {
        await this.client.connect();
        this.logger.log('Publisher conectado.');
    }

    async publishEvent(eventType: string, data: any) {
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
}