import { Model } from 'mongoose';
import { CriarTransacaoDto, Metricas } from './transacao.dto';
import { Transacao } from './transacao.schema';
export declare class TransacoesService {
    private readonly transacaoModel;
    constructor(transacaoModel: Model<Transacao>);
    criar(dados: CriarTransacaoDto): Promise<{
        id: string;
        descricao: string;
        valor: number;
        tipo: "receita" | "despesa";
        categoria: string;
        consumoConsciente: boolean;
    }>;
    listar(): Promise<{
        historico: {
            id: string;
            descricao: string;
            valor: number;
            tipo: "receita" | "despesa";
            categoria: string;
            consumoConsciente: boolean;
        }[];
        metricas: Metricas;
    }>;
    calcularMetricas(transacoes: Pick<Transacao, 'valor' | 'tipo' | 'consumoConsciente'>[]): Metricas;
    private arredondar;
    private validar;
}
