import { DataSource } from "typeorm"
import * as dotenv from 'dotenv'
import { Id } from "../entities/id.entity.ts";
dotenv.config();

export const myDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: process.env.DB_PORT as unknown as number,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Id],
    schema: process.env.DB_SCHEMA,
    synchronize: false,
    migrations: ['./src/db/migrations/*.ts'],
})