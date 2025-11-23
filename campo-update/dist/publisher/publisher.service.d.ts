export declare class PublisherService {
    private readonly logger;
    private readonly client;
    constructor();
    onModuleInit(): Promise<void>;
    publishEvent(eventType: string, data: any): Promise<{
        success: boolean;
        message: string;
        event: {
            type: string;
            data: any;
            timestamp: string;
        };
    }>;
}
