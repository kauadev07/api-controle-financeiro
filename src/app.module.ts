import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransacoesModule } from './transacoes/transacoes.module';

const MONGO_URI =
  process.env.MONGO_URI ||
  'mongodb+srv://USUARIO:SENHA@cluster0.wohakn6.mongodb.net/financas?retryWrites=true&w=majority';

@Module({
  imports: [MongooseModule.forRoot(MONGO_URI), TransacoesModule],
})
export class AppModule {}