import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TransacaoDocument = HydratedDocument<Transacao>;

export const TIPOS_TRANSACAO = ['receita', 'despesa'] as const;
export type TipoTransacao = (typeof TIPOS_TRANSACAO)[number];

@Schema()
export class Transacao {
  @Prop({ type: String, required: true })
  descricao: string;

  @Prop({ type: Number, required: true })
  valor: number;

  // Só aceita "receita" ou "despesa"
  @Prop({ type: String, required: true, enum: TIPOS_TRANSACAO })
  tipo: TipoTransacao;

  @Prop({ type: String, required: true })
  categoria: string;

  // true = gasto essencial/consciente, false = gasto por impulso
  @Prop({ type: Boolean, required: true })
  consumoConsciente: boolean;
}

export const TransacaoSchema = SchemaFactory.createForClass(Transacao);
