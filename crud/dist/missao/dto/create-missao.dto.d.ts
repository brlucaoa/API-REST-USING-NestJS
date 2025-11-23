import { statusMissao } from '../../operador/enums/statusmissao.enum';
export declare class CreateMissaoDto {
    titulo: string;
    descricao: string;
    status: statusMissao;
    operadoresId: number[];
}
export declare class PostMissaoDto {
    titulo: string;
    descricao: string;
    status: statusMissao;
}
