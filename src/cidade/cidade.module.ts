import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cidade } from "./cidade.entity";
import { CidadeService } from "./cidade.service";
import { CidadeController } from "./cidade.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Cidade])],
  providers: [CidadeService],
  controllers: [CidadeController]
})
export class CidadeModule {}
