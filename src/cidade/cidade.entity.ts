import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cidade {
  @PrimaryGeneratedColumn()
  idCidade: number;

  @Column()
  nomeCidade: string;

  @Column()
  ibge: string;

  @Column()
  uf: string;
}
