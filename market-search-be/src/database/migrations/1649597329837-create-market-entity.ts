import { MigrationInterface, QueryRunner } from 'typeorm';

export class createMarketEntity1649597329837 implements MigrationInterface {
  name = 'createMarketEntity1649597329837';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "market" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "line_one" character varying(255) NOT NULL, "line_two" character varying(255), "city" character varying(255) NOT NULL, "zipCode" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1e9a2963edfd331d92018e3abac" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "market"`);
  }
}
