import { MigrationInterface, QueryRunner } from 'typeorm';

export class createProductEntity1649709055468 implements MigrationInterface {
  name = 'createProductEntity1649709055468';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "category" character varying(255) NOT NULL, "quantity" integer NOT NULL, "market_id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "product" ADD CONSTRAINT "FK_c2b67ca8e27ccec84ab25a5f4ea" FOREIGN KEY ("market_id") REFERENCES "market"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product" DROP CONSTRAINT "FK_c2b67ca8e27ccec84ab25a5f4ea"`,
    );
    await queryRunner.query(`DROP TABLE "product"`);
  }
}
