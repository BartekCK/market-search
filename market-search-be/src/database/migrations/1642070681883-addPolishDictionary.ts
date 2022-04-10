import { MigrationInterface, QueryRunner } from 'typeorm';

export class addPolishDictionary1642070681883 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    BEGIN;
      CREATE TEXT SEARCH CONFIGURATION public.polish ( COPY = pg_catalog.english );

      CREATE TEXT SEARCH DICTIONARY polish_ispell (
        TEMPLATE = ispell,
        DictFile = polish,
        AffFile = polish,
        StopWords = polish
      );

      ALTER TEXT SEARCH CONFIGURATION polish
        ALTER MAPPING FOR asciiword, asciihword, hword_asciipart, word, hword, hword_part
        WITH polish_ispell;
    COMMIT;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    BEGIN;
      DROP TEXT SEARCH CONFIGURATION IF EXISTS public.polish;
      DROP TEXT SEARCH CONFIGURATION IF EXISTS polish;
      DROP TEXT SEARCH DICTIONARY IF EXISTS polish_ispell;
    COMMIT;
    `);
  }
}
