import {Controller, Logger} from '@nestjs/common';
import {EventPattern, Payload} from '@nestjs/microservices';
import {AppService} from './app.service';

@Controller()
export class AppController {
    private readonly logger = new Logger('AppController.name');

    constructor(private readonly appService: AppService) {
    }

    @EventPattern('campo_update')
    handleEvent(@Payload() event: { type: string; data: any; timestamp: string }) {
        this.logger.log(`Evento recebido: ${event.type}`, event);

        switch (event.type) {
            case 'operador.updated':
                this.appService.updatingOperador(event.data.id, event.data);
                this.logger.log(`Operador Atualizado com sucesso: ${event.data.id}`);
                break;

            case 'missao.updated':
                this.appService.updatingMissao(event.data.id, event.data);
              this.logger.log(`Missao Atualizada com sucesso: ${event.data.id}`);

              break;
            default:
                this.logger.warn(`Tipo de evento desconhecido: ${event.type}`);
        }
    }
}
