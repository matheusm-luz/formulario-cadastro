import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CepModule } from './cep/cep.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cidade } from "./cidade/cidade.entity";
import { CidadeModule } from "./cidade/cidade.module";
import { ClienteModule } from "./cliente/cliente.module";
import { Cliente } from "./cliente/cliente.entity";

@Module({
  imports: [CepModule, CidadeModule, ClienteModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql10-farm1.kinghost.net',
      port: 3306,
      username: 'USUARIO_ACESSO',
      password: 'SENHA_ACESSO',
      database: 'BANCO_ACESSO',
      entities: [Cidade, Cliente],
      synchronize: true,
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
