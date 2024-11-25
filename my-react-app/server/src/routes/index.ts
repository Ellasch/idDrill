import { Router } from "express"
import { myDataSource } from "../db/dataSource/dataSource.ts"
import { v4 as uuid } from "uuid"

myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err)
  })

const router = Router()

router.post("/", (req, res) => {
  const first8: Array<number> = req.body.digits
  const lastDigit = calcLast(first8)

  try {
    myDataSource.getRepository("id").save({
      first8Digits: first8.join(""),
      lastDigit: lastDigit,
      uuid: uuid(),
    })

    console.log(`${first8.join("")} has been saved to the database`)
  } catch (err) {
    throw new Error(JSON.stringify(err))
  }

  res.send(JSON.stringify(lastDigit))
})

const calcLast = (first8: Array<number>) => {
  const newArr = first8.map((digit, index) => {
    const multiplier = index % 2 == 0 ? 1 : 2

    return Math.trunc((digit * multiplier) / 10) + ((digit * multiplier) % 10)
  })

  const sum = newArr.reduce((last, curr) => last + curr, 0)

  return Math.trunc(sum / 10) * 10 + 10 - sum
}

export default router
