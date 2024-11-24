import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Id {
  @PrimaryColumn()
  uuid!: number;

  @Column()
  first8Digits!: number;

  @Column()
  lastDigit!: number; 
}