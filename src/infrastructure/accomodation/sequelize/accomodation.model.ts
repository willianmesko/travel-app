import {
  Model,
  Table,
  Column,
  ForeignKey,
  PrimaryKey,
} from "sequelize-typescript";

import TravelModel from "../../travel/repository/sequelize/travel.model";

@Table({
  tableName: "accomodation",
})
export default class AccomodationModel extends Model {
  @PrimaryKey
  @Column
  declare id: string;

  @ForeignKey(() => TravelModel)
  @Column
  declare travel_id: string;

  @Column({ allowNull: false })
  declare title: string;

  @Column({ allowNull: false })
  declare start_date: Date;

  @Column({ allowNull: false })
  declare end_date: Date;

  @Column({ allowNull: false })
  declare address: string;

  @Column({ allowNull: false })
  declare map: string;

  @Column({ allowNull: true })
  declare reference_url: string;
}
