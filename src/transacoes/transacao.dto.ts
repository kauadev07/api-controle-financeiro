import { TipoTransacao } from './transacao.schema';

export class CriarTransacaoDto {
  descricao: string;
  valor: number;
  tipo: TipoTransacao;
  categoria: string;
  consumoConsciente: boolean;
}

export interface Metricas {
  saldoTotal: number;
  totalDespesas: number;
  totalGastoImpulso: number;
}
