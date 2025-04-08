import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1744043458100 implements MigrationInterface {
    name = 'Default1744043458100'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "budgets" DROP COLUMN "description"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "budgets" ADD "description" text`);
    }

}
