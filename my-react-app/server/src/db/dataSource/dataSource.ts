import { DataSource } from "typeorm"
import * as dotenv from 'dotenv'

dotenv.config();

export const myDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: process.env.DB_PORT as unknown as number,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['./src/db/entities/*.ts'],
    synchronize: true,
    migrations: ['./src/db/migrations/*.ts'],
})