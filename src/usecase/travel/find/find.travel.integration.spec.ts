import { Sequelize } from "sequelize-typescript";
import Travel from "../../../domain/travel/entity/travel";

import TravelModel from "../../../infrastructure/travel/repository/sequelize/travel.model";
import TravelRepository from "../../../infrastructure/travel/repository/sequelize/travel.repository";
import FindTravelUseCase from "./find.travel.usecase";

describe("Test find travel use case", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    await sequelize.addModels([TravelModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should find a travel", async () => {
    const travelRepository = new TravelRepository();
    const usecase = new FindTravelUseCase(travelRepository);

    const travel = new Travel("123", "bali");

    await travelRepository.create(travel);

    const input = {
      id: "123",
    };

    const output = {
      id: "123",
      title: "bali",
    };

    const result = await usecase.execute(input);

    expect(result).toEqual(output);
  });
});
