import { Injectable, Inject } from '@nestjs/common';
import { Repository } from "typeorm";
import { Cidade } from "./cidade.entity";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class CidadeService {
  constructor(
    @InjectRepository(Cidade)
    private cidadeRepository: Repository<Cidade>,
  ) {
  }

  findOne(id: number): Promise<Cidade> {
    return this.cidadeRepository.findOneBy({ idCidade: id});
  }

  async addCidade(params: any): Promise<Cidade> {
    const cidadeJson = JSON.parse(params);
    const cidade: Cidade = this.cidadeRepository.create();
    cidade.nomeCidade = cidadeJson.nome;
    cidade.ibge = cidadeJson.ibge;
    cidade.uf = cidadeJson.uf;
    await this.cidadeRepository.save(cidade);

    return cidade;
  }

}
