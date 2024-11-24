import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Id {
  @PrimaryColumn()
  uuid!: string;

  @Column()
  first8Digits!: number;

  @Column()
  lastDigit!: number; 
}