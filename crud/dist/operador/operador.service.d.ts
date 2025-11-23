import { CreateOperadorDto } from './dto/create-operador.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class OperadorService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateOperadorDto): Promise<{
        name: string;
        email: string;
        cpf: string;
        patente: import("@prisma/client").$Enums.Patente;
        status: import("@prisma/client").$Enums.StatusOperador;
        createdAt: Date;
        id: number;
    }>;
    findAll(): Prisma.PrismaPromise<({
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
    findOne(id: number): Promise<{
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
    update(id: number, data: Partial<CreateOperadorDto>): Prisma.Prisma__OperadorClient<{
        name: string;
        email: string;
        cpf: string;
        patente: import("@prisma/client").$Enums.Patente;
        status: import("@prisma/client").$Enums.StatusOperador;
        createdAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
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
