import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity({ schema: "ella" })
export class Id {
  @PrimaryColumn({type: "text"})
  uuid!: string

  @Column({name:'first_8_digits', type:"text"})
  first8Digits!: string

  @Column({name:'last_digit', type:"text"})
  lastDigit!: string
}
