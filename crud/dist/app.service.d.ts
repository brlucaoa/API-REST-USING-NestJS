import { PrismaService } from './prisma/prisma.service';
import { CreateOperadorDto } from './operador/dto/create-operador.dto';
import { UpdateMissaoDto } from './missao/dto/update-missao.dto';
export declare class AppService {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    updatingOperador(id: number, data: Partial<CreateOperadorDto>): Promise<{
        id: number;
        email: string;
        cpf: string;
        name: string;
        patente: import("@prisma/client").$Enums.Patente;
        status: import("@prisma/client").$Enums.StatusOperador;
        createdAt: Date;
    }>;
    updatingMissao(id: number, dto: UpdateMissaoDto): Promise<{
        message: string;
        updated: {
            operadores: {
                id: number;
                email: string;
                cpf: string;
                name: string;
                patente: import("@prisma/client").$Enums.Patente;
                status: import("@prisma/client").$Enums.StatusOperador;
                createdAt: Date;
            }[];
        } & {
            id: number;
            status: import("@prisma/client").$Enums.StatusMissao;
            createdAt: Date;
            titulo: string;
            descricao: string | null;
        };
    }>;
}
