import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    private readonly logger;
    constructor(appService: AppService);
    handleEvent(event: {
        type: string;
        data: any;
        timestamp: string;
    }): void;
}
