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
            name: "restaurantId",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "stars",
            type: "decimal",
            isNullable: false,
          },
          {
            name: "comment",
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
        columnNames: ["restaurantId"],
        referencedTableName: "restaurant",
        referencedColumnNames: ["id"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("review");
  }
}
