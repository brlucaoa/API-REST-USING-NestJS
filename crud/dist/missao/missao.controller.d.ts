import { MissaoService } from './missao.service';
import { PostMissaoDto } from './dto/create-missao.dto';
import { UpdateMissaoDto } from './dto/update-missao.dto';
export declare class MissaoController {
    private readonly missaoService;
    constructor(missaoService: MissaoService);
    create(dto: PostMissaoDto): Promise<{
        operadores: {
            name: string;
            email: string;
            cpf: string;
            patente: import("@prisma/client").$Enums.Patente;
            status: import("@prisma/client").$Enums.StatusOperador;
            createdAt: Date;
            id: number;
        }[];
    } & {
        status: import("@prisma/client").$Enums.StatusMissao;
        createdAt: Date;
        id: number;
        titulo: string;
        descricao: string | null;
    }>;
    addOperador(id: number, operadorId: number): Promise<{
        operadores: {
            name: string;
            email: string;
            cpf: string;
            patente: import("@prisma/client").$Enums.Patente;
            status: import("@prisma/client").$Enums.StatusOperador;
            createdAt: Date;
            id: number;
        }[];
    } & {
        status: import("@prisma/client").$Enums.StatusMissao;
        createdAt: Date;
        id: number;
        titulo: string;
        descricao: string | null;
    }>;
    findAll(): Promise<({
        operadores: {
            name: string;
            email: string;
            cpf: string;
            patente: import("@prisma/client").$Enums.Patente;
            status: import("@prisma/client").$Enums.StatusOperador;
            createdAt: Date;
            id: number;
        }[];
    } & {
        status: import("@prisma/client").$Enums.StatusMissao;
        createdAt: Date;
        id: number;
        titulo: string;
        descricao: string | null;
    })[]>;
    findOne(id: number): Promise<{
        operadores: {
            name: string;
            email: string;
            cpf: string;
            patente: import("@prisma/client").$Enums.Patente;
            status: import("@prisma/client").$Enums.StatusOperador;
            createdAt: Date;
            id: number;
        }[];
    } & {
        status: import("@prisma/client").$Enums.StatusMissao;
        createdAt: Date;
        id: number;
        titulo: string;
        descricao: string | null;
    }>;
    update(id: number, dto: UpdateMissaoDto): Promise<({
        operadores: {
            name: string;
            email: string;
            cpf: string;
            patente: import("@prisma/client").$Enums.Patente;
            status: import("@prisma/client").$Enums.StatusOperador;
            createdAt: Date;
            id: number;
        }[];
    } & {
        status: import("@prisma/client").$Enums.StatusMissao;
        createdAt: Date;
        id: number;
        titulo: string;
        descricao: string | null;
    }) | undefined>;
    remove(id: number): Promise<{
        status: import("@prisma/client").$Enums.StatusMissao;
        createdAt: Date;
        id: number;
        titulo: string;
        descricao: string | null;
    }>;
}
