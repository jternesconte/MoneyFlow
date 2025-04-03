import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1743643818745 implements MigrationInterface {
    name = 'Default1743643818745'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "expenses" ADD "isFixed" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "expenses" ADD "recurrenceInterval" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "expenses" DROP COLUMN "recurrenceInterval"`);
        await queryRunner.query(`ALTER TABLE "expenses" DROP COLUMN "isFixed"`);
    }

}
