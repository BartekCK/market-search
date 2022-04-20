import { MigrationInterface, QueryRunner } from 'typeorm';

export class addPriceColumn1650470543536 implements MigrationInterface {
  name = 'addPriceColumn1650470543536';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product" ADD "price" numeric(6,2) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "price"`);
  }
}
