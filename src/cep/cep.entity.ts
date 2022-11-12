import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cep {
  @Column({ default: true })
  isActive: boolean;
}
