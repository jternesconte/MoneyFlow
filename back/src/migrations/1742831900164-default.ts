import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1742831900164 implements MigrationInterface {
    name = 'Default1742831900164'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "budgets" ALTER COLUMN "month" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "budgets" ALTER COLUMN "month" SET DEFAULT now()`);
    }

}
