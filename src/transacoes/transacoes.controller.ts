import { Body, Controller, Get, Post } from '@nestjs/common';
import { CriarTransacaoDto } from './transacao.dto';
import { TransacoesService } from './transacoes.service';

@Controller('transacoes')
export class TransacoesController {
  constructor(private readonly transacoesService: TransacoesService) {}

  // POST /transacoes
  @Post()
  async criar(@Body() dados: CriarTransacaoDto) {
    return this.transacoesService.criar(dados);
  }

  // GET /transacoes -> { historico, metricas }
  @Get()
  async listar() {
    return this.transacoesService.listar();
  }
}
