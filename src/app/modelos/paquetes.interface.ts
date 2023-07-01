import { OpcPaquetesI } from "./opcpaq.interface";

export interface PaquetesI{
    idProd: string;
    desc: string;
    elem: Array<OpcPaquetesI>;
}