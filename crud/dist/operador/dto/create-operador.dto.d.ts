import { Patente } from '../enums/patente.enum';
import { statusOperador } from '../enums/statusoperador.enum';
export declare class CreateOperadorDto {
    name: string;
    email: string;
    cpf: string;
    patente: Patente;
    status: statusOperador;
}
