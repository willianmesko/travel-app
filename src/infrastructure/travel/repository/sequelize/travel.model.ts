import { Table, Model, PrimaryKey, Column } from "sequelize-typescript";

@Table({
  tableName: "travel",
  timestamps: false,
})
export default class TravelModel extends Model {
  @PrimaryKey
  @Column
  declare id: string;

  @Column({ allowNull: false })
  declare title: string;

  @Column({ allowNull: false })
  declare destination: string;

  @Column({ allowNull: false })
  declare user_id: number;
}
