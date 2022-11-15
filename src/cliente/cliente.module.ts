import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cliente } from "./cliente.entity";
import { ClienteController } from "./cliente.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],
  providers: [ClienteService],
  controllers: [ClienteController]
})
export class ClienteModule {}
