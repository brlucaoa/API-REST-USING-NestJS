import { statusMissao } from '../enums/enums';
import { statusOperador } from '../enums/enums';
export declare class updateMissaoDto {
    status: statusMissao;
    operadoresId: number[];
}
export declare class updateOperadorDto {
    status: statusOperador;
}
