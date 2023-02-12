import {
  Table,
  Model,
  PrimaryKey,
  Column,
  BelongsTo,
  ForeignKey,
  HasMany,
} from "sequelize-typescript";
import Flight from "../../../../domain/flight/entity/flight";
import FlightModel from "../../../flight/sequelize/flight.model";
import UserModel from "../../../user/repository/sequelize/user.model";

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

  @ForeignKey(() => UserModel)
  @Column
  declare user_id: string;

  @HasMany(() => FlightModel, "travel_id")
  declare flights: FlightModel[];

  @Column({ allowNull: false })
  declare start_date: Date;

  @Column({ allowNull: false })
  declare end_date: Date;
}
