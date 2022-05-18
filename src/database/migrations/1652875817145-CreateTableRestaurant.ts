import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableRestaurant1652875817145 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "restaurant",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "description",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "phone",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "adress",
            type: "varchar",
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("restaurant");
  }
}
