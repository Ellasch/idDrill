import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({schema: 'ella'})
export class Id {
  @PrimaryColumn()
  uuid!: string;

  @Column()
  first8Digits!: number;

  @Column()
  lastDigit!: number; 
}