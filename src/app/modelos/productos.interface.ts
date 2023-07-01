import { OpcProductosI } from "./opcprod.interface";

export interface ProductosI{
    idProd: string;
    imagen: string;
    titulo: string;
    videos: Array<OpcProductosI>;
}