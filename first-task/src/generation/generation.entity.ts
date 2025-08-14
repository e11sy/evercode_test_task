import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Generation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;
}
