import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class CepService {
  constructor(private readonly httpService: HttpService) {}

  findByCep(cep: string): Promise<{
    uf: any;
    complemento: any;
    logradouro: any;
    bairro: any;
    localidade: any;
    ibge: any;
    unidade: any;
  }> {
    const uri = 'https://viacep.com.br';
    const url = `${uri}/ws/${cep}/json/`;
    return this.httpService
      .get(url)
      .toPromise()
      .then((res) => {
        const result = res.data;
        const fileds = {
          logradouro: result.logradouro,
          complemento: result.complemento,
          bairro: result.bairro,
          localidade: result.localidade,
          uf: result.uf,
          unidade: result.unidade,
          ibge: result.ibge,
        };
        return fileds;
      });
  }
}
