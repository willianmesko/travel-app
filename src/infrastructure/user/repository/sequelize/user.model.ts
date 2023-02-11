import {
  Table,
  Model,
  PrimaryKey,
  Column,
  HasMany,
} from "sequelize-typescript";
import TravelModel from "../../../travel/repository/sequelize/travel.model";

@Table({
  tableName: "user",
  timestamps: true,
})
export default class UserModel extends Model {
  @PrimaryKey
  @Column
  declare id: string;

  @Column({ allowNull: false })
  declare username: string;

  @Column({ allowNull: false })
  declare email: string;

  //   @HasMany(() => TravelModel)
  //   declare trips: TravelModel[];
}
