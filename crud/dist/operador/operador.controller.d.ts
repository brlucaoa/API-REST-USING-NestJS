import { OperadorService } from './operador.service';
import { CreateOperadorDto } from './dto/create-operador.dto';
import { UpdateOperadorDto } from './dto/update-operador.dto';
export declare class OperadorController {
    private readonly operadorService;
    constructor(operadorService: OperadorService);
    create(dto: CreateOperadorDto): Promise<{
        name: string;
        email: string;
        cpf: string;
        patente: import("@prisma/client").$Enums.Patente;
        status: import("@prisma/client").$Enums.StatusOperador;
        createdAt: Date;
        id: number;
    }>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        missoes: {
            status: import("@prisma/client").$Enums.StatusMissao;
            createdAt: Date;
            id: number;
            titulo: string;
            descricao: string | null;
        }[];
    } & {
        name: string;
        email: string;
        cpf: string;
        patente: import("@prisma/client").$Enums.Patente;
        status: import("@prisma/client").$Enums.StatusOperador;
        createdAt: Date;
        id: number;
    })[]>;
    findOne(id: string): Promise<{
        missoes: {
            status: import("@prisma/client").$Enums.StatusMissao;
            createdAt: Date;
            id: number;
            titulo: string;
            descricao: string | null;
        }[];
    } & {
        name: string;
        email: string;
        cpf: string;
        patente: import("@prisma/client").$Enums.Patente;
        status: import("@prisma/client").$Enums.StatusOperador;
        createdAt: Date;
        id: number;
    }>;
    update(id: number, dto: UpdateOperadorDto): import("@prisma/client").Prisma.Prisma__OperadorClient<{
        name: string;
        email: string;
        cpf: string;
        patente: import("@prisma/client").$Enums.Patente;
        status: import("@prisma/client").$Enums.StatusOperador;
        createdAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): Promise<{
        name: string;
        email: string;
        cpf: string;
        patente: import("@prisma/client").$Enums.Patente;
        status: import("@prisma/client").$Enums.StatusOperador;
        createdAt: Date;
        id: number;
    }>;
}
