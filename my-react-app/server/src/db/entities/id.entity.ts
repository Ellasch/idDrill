import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity({ schema: "ella" })
export class Id {
  @PrimaryColumn()
  uuid!: string

  @Column({name:'first_8_digits'})
  first8Digits!: string

  @Column({name:'last_digit'})
  lastDigit!: string
}
