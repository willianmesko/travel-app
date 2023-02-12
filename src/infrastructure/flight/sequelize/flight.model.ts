import {
  Model,
  Table,
  Column,
  ForeignKey,
  PrimaryKey,
} from "sequelize-typescript";

import TravelModel from "../../travel/repository/sequelize/travel.model";

@Table({
  tableName: "flight",
})
export default class FlightModel extends Model {
  @PrimaryKey
  @Column
  declare id: string;

  @ForeignKey(() => TravelModel)
  @Column
  declare travel_id: string;

  @Column({ allowNull: false })
  declare title: string;

  @Column({ allowNull: false })
  declare from: string;

  @Column({ allowNull: false })
  declare to: string;
  @Column({ allowNull: false })
  declare airport: string;

  @Column({ allowNull: false })
  declare code: string;

  @Column({ allowNull: true })
  declare airline: string;
  @Column({ allowNull: true })
  declare reference_url: string;

  @Column
  declare date: Date;
}
