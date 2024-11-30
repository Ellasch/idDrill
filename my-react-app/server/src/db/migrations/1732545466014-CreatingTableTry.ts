import { MigrationInterface, QueryRunner } from "typeorm";
import * as dotenv from 'dotenv';

dotenv.config();

export class CreatingTableTry1732545466014 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       
        await queryRunner.query(`ALTER TABLE  ${process.env.DB_SCHEMA}.id 
ALTER COLUMN first_8_digits TYPE VARCHAR(8)`);

        await queryRunner.query(`ALTER TABLE ${process.env.DB_SCHEMA}.id
            ALTER COLUMN last_digit TYPE VARCHAR(1);`);
           
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
