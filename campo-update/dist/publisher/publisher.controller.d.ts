import { PublisherService } from './publisher.service';
import { UpdateOperadorPublisherDto } from './dto/update-publisher.dto';
import { UpdateMissaoPublisherDto } from './dto/update-publisher.dto';
export declare class PublisherController {
    private readonly publisherService;
    constructor(publisherService: PublisherService);
    updateOperador(id: number, dto: UpdateOperadorPublisherDto): Promise<{
        success: boolean;
        message: string;
        event: {
            type: string;
            data: any;
            timestamp: string;
        };
    }>;
    updateMissao(id: number, dto: UpdateMissaoPublisherDto): Promise<{
        success: boolean;
        message: string;
        event: {
            type: string;
            data: any;
            timestamp: string;
        };
    }>;
}
