import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  idCliente: number;

  @Column()
  idCidade: number;

  @Column()
  nome: string;

  @Column()
  sobrenome: string;

  @Column()
  dataNascimento: string;

  @Column()
  cpf: string;

  @Column()
  telefone: number;

  @Column()
  email: string;

  @Column()
  cep: string;

  @Column()
  logradouro: string;

  @Column()
  complemento: string;

  @Column()
  bairro: string;

  @Column()
  dataCadastro: string;
}
