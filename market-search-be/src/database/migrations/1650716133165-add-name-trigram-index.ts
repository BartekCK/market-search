import { MigrationInterface, QueryRunner } from 'typeorm';

export class addNameTrigramIndex1650716133165 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE INDEX product_name_trigram ON product USING gist (name gist_trgm_ops);
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP INDEX product_name_trigram;
        `);
  }
}
