import { MigrationInterface, QueryRunner } from 'typeorm';

export class importMarketCsv1655034630388 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `COPY market FROM '/usr/share/postgresql/13/csv/market_search_public_market.csv' DELIMITER ',' CSV HEADER;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM market;`);
  }
}
