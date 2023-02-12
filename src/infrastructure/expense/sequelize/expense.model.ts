import {
  Model,
  Table,
  Column,
  ForeignKey,
  PrimaryKey,
} from "sequelize-typescript";

import TravelModel from "../../travel/repository/sequelize/travel.model";

@Table({
  tableName: "expense",
})
export default class ExpenseModel extends Model {
  @PrimaryKey
  @Column
  declare id: string;

  @ForeignKey(() => TravelModel)
  @Column
  declare travel_id: string;

  @Column({ allowNull: false })
  declare title: string;

  @Column({ allowNull: true })
  declare category: string;

  @Column({ allowNull: false })
  declare price: number;

  @Column({ allowNull: true })
  declare reference_url: string;

  @Column
  declare date: Date;
}
