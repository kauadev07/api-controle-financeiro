import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CriarTransacaoDto, Metricas } from './transacao.dto';
import { TIPOS_TRANSACAO, Transacao } from './transacao.schema';

@Injectable()
export class TransacoesService {
  constructor(
    @InjectModel(Transacao.name) private readonly transacaoModel: Model<Transacao>,
  ) {}

  async criar(dados: CriarTransacaoDto) {
    this.validar(dados);

    const nova = new this.transacaoModel({
      descricao: dados.descricao,
      valor: dados.valor,
      tipo: dados.tipo,
      categoria: dados.categoria,
      consumoConsciente: dados.consumoConsciente,
    });
    const salva = await nova.save();

    return {
      id: salva.id as string,
      descricao: salva.descricao,
      valor: salva.valor,
      tipo: salva.tipo,
      categoria: salva.categoria,
      consumoConsciente: salva.consumoConsciente,
    };
  }

  async listar() {
    const transacoes = await this.transacaoModel.find().exec();

    // Devolve só os campos do modelo (sem _id e __v)
    const historico = transacoes.map(t => ({
      id: t.id as string,
      descricao: t.descricao,
      valor: t.valor,
      tipo: t.tipo,
      categoria: t.categoria,
      consumoConsciente: t.consumoConsciente,
    }));

    return { historico, metricas: this.calcularMetricas(historico) };
  }

  // Processamento das métricas feito no back-end (Service)
  calcularMetricas(
    transacoes: Pick<Transacao, 'valor' | 'tipo' | 'consumoConsciente'>[],
  ): Metricas {
    let totalReceitas = 0;
    let totalDespesas = 0;
    let totalGastoImpulso = 0;

    for (const t of transacoes) {
      if (t.tipo === 'receita') {
        totalReceitas += t.valor;
      } else if (t.tipo === 'despesa') {
        totalDespesas += t.valor;
        if (t.consumoConsciente === false) {
          totalGastoImpulso += t.valor;
        }
      }
    }

    return {
      saldoTotal: this.arredondar(totalReceitas - totalDespesas),
      totalDespesas: this.arredondar(totalDespesas),
      totalGastoImpulso: this.arredondar(totalGastoImpulso),
    };
  }

  private arredondar(n: number): number {
    return Math.round(n * 100) / 100;
  }

  private validar(d: CriarTransacaoDto) {
    if (!d || typeof d.descricao !== 'string' || d.descricao.trim() === '') {
      throw new BadRequestException('descricao é obrigatória (texto).');
    }
    if (typeof d.valor !== 'number' || !isFinite(d.valor) || d.valor < 0) {
      throw new BadRequestException('valor é obrigatório (número maior ou igual a 0).');
    }
    if (!TIPOS_TRANSACAO.includes(d.tipo)) {
      throw new BadRequestException('tipo deve ser "receita" ou "despesa".');
    }
    if (typeof d.categoria !== 'string' || d.categoria.trim() === '') {
      throw new BadRequestException('categoria é obrigatória (texto).');
    }
    if (typeof d.consumoConsciente !== 'boolean') {
      throw new BadRequestException('consumoConsciente é obrigatório (true ou false).');
    }
  }
}
