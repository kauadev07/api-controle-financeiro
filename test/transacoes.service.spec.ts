import { TransacoesService } from '../src/transacoes/transacoes.service';

describe('TransacoesService - métricas', () => {
  const service = new TransacoesService(null as any);

  it('calcula saldo, total de despesas e gasto por impulso', () => {
    const metricas = service.calcularMetricas([
      { valor: 3000, tipo: 'receita', consumoConsciente: true },
      { valor: 1000, tipo: 'despesa', consumoConsciente: true },
      { valor: 200, tipo: 'despesa', consumoConsciente: false },
      { valor: 50.5, tipo: 'despesa', consumoConsciente: false },
    ]);

    expect(metricas.saldoTotal).toBe(1749.5);
    expect(metricas.totalDespesas).toBe(1250.5);
    expect(metricas.totalGastoImpulso).toBe(250.5);
  });

  it('retorna zeros quando não há transações', () => {
    expect(service.calcularMetricas([])).toEqual({
      saldoTotal: 0,
      totalDespesas: 0,
      totalGastoImpulso: 0,
    });
  });
});
