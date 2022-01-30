import {MigrationInterface, QueryRunner} from "typeorm";

export class User1643528994749 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("")
    }

}
