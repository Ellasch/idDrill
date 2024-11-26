import { MigrationInterface, QueryRunner } from "typeorm"

export class CreatingTable1732528949367 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE if NOT exists ella.id (
            uuid text,
            first_8_digits integer,
            last_digit integer)`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
