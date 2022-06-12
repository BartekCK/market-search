import { MigrationInterface, QueryRunner } from 'typeorm';

export class importProductCsv1655034788816 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `COPY product(id, name, category, quantity, price, market_id) FROM '/usr/share/postgresql/13/csv/market_search_public_product.csv' DELIMITER ',' CSV HEADER;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM product;`);
  }
}
