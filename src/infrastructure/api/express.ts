import express, { Express } from "express";
import { Sequelize } from "sequelize-typescript";
import TravelModel from "../travel/repository/sequelize/travel.model";

import { travelRoute } from "./routes/travel.route";

export const app: Express = express();
app.use(express.json());
app.use("/travel", travelRoute);

export let sequelize: Sequelize;

async function setupDb() {
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: ":memory:",
    logging: false,
  });
  await sequelize.addModels([TravelModel]);
  await sequelize.sync();
}
setupDb();
