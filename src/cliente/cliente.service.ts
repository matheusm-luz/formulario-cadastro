import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cliente } from './cliente.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { Cidade } from "../cidade/cidade.entity";

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {
  }

  findOne(id: number): Promise<Cliente> {
    return this.clienteRepository.findOneBy({ idCliente: id});
  }

  async addCliente(params: any): Promise<Cliente>{
    const clienteJson = JSON.parse(params);
    const cliente: Cliente = this.clienteRepository.create();
    cliente.nome = clienteJson.nome;
    cliente.sobrenome = clienteJson.sobrenome;
    cliente.dataNascimento = clienteJson.dataNascimento;
    cliente.cpf = clienteJson.cpf;
    cliente.telefone = clienteJson.telefone;
    cliente.email = clienteJson.email;
    cliente.cep = clienteJson.cep;
    cliente.logradouro = clienteJson.logradouro;
    cliente.complemento = clienteJson.complemento;
    cliente.bairro = clienteJson.bairro;
    cliente.dataCadastro = clienteJson.dataCadastro;
    cliente.idCidade = clienteJson.idCidade;
    await this.clienteRepository.save(cliente);
    return cliente;
  }

}
