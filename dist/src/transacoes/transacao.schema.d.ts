import { HydratedDocument } from 'mongoose';
export type TransacaoDocument = HydratedDocument<Transacao>;
export declare const TIPOS_TRANSACAO: readonly ["receita", "despesa"];
export type TipoTransacao = (typeof TIPOS_TRANSACAO)[number];
export declare class Transacao {
    descricao: string;
    valor: number;
    tipo: TipoTransacao;
    categoria: string;
    consumoConsciente: boolean;
}
export declare const TransacaoSchema: import("mongoose").Schema<Transacao, import("mongoose").Model<Transacao, any, any, any, import("mongoose").Document<unknown, any, Transacao, any, {}> & Transacao & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Transacao, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Transacao>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<Transacao> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
