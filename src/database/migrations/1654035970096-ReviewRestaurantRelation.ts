import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class ReviewRestaurantRelation1654035970096
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "review",
        columns: [
          {
            name: "customerId",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "restaurant",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "stars",
            type: "int",
            isNullable: false,
          },
          {
            name: "coment",
            type: "varchar",
            isNullable: false,
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "review",
      new TableForeignKey({
        columnNames: ["customerId"],
        referencedTableName: "customer",
        referencedColumnNames: ["id"],
      })
    );

    await queryRunner.createForeignKey(
      "review",
      new TableForeignKey({
        columnNames: ["restaurant"],
        referencedTableName: "restaurant",
        referencedColumnNames: ["id"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("review");
  }
}
