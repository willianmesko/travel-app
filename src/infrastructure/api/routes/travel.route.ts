import express, { Request, Response } from "express";

import CreateTravelUseCase from "../../../usecase/travel/create/create.travel.usecase";
import ListTravelUseCase from "../../../usecase/travel/list/list.travel.usecase";

import TravelRepository from "../../travel/repository/sequelize/travel.repository";
import TravelPreseter from "../presenters/travel.presenter";

export const travelRoute = express.Router();

travelRoute.post("/", async (req: Request, res: Response) => {
  const usecase = new CreateTravelUseCase(new TravelRepository());
  try {
    const travelDTO = {
      title: req.body.title,
    };
    const output = await usecase.execute(travelDTO);
    res.send(output);
  } catch (err) {
    res.status(500).send(err);
  }
});

travelRoute.get("/", async (req: Request, res: Response) => {
  const usecase = new ListTravelUseCase(new TravelRepository());
  const output = await usecase.execute({});

  res.format({
    json: async () => res.send(output),
    xml: async () => res.send(TravelPreseter.listXML(output)),
  });
});
