import { CriarTransacaoDto } from './transacao.dto';
import { TransacoesService } from './transacoes.service';
export declare class TransacoesController {
    private readonly transacoesService;
    constructor(transacoesService: TransacoesService);
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
        metricas: import("./transacao.dto").Metricas;
    }>;
}
