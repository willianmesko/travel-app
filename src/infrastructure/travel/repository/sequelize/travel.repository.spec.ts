import { Sequelize } from "sequelize-typescript";
import Travel from "../../../../domain/travel/entity/travel";

import TravelModel from "./travel.model";
import TravelRepository from "./travel.repository";

import UserModel from "../../../user/repository/sequelize/user.model";

describe("Travel repository test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    await sequelize.addModels([UserModel, TravelModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should create a travel", async () => {
    const travelRepository = new TravelRepository();
    const travel = new Travel(
      "123",
      "travel 1",
      "bali",
      "2",
      new Date(),
      new Date()
    );

    console.log("here", travel);
    await travelRepository.create(travel);

    // const travelModel = await TravelModel.findOne({ where: { id: "123" } });

    // expect(travelModel.toJSON().id).toBe(travel.id);
    // expect(travelModel.toJSON().title).toBe("travel 1");
  });

  it("should update a travel", async () => {
    const travelRepository = new TravelRepository();
    const travel = new Travel(
      "123",
      "travel 1",
      "bali",
      "2",
      new Date(),
      new Date()
    );

    await travelRepository.create(travel);

    travel.changeTitle("travel 2");
    await travelRepository.update(travel);
    const travelModel = await TravelModel.findOne({ where: { id: "123" } });

    expect(travelModel.toJSON()).toStrictEqual({
      id: "123",
      title: travel.title,
    });
  });

  it("should find a travel", async () => {
    const travelRepository = new TravelRepository();
    const travel = new Travel(
      "123",
      "travel 1",
      "bali",
      "2",
      new Date(),
      new Date()
    );

    await travelRepository.create(travel);

    const travelResult = await travelRepository.find(travel.id);

    expect(travel).toStrictEqual(travelResult);
  });

  it("should throw an error when travel is not found", async () => {
    const travelRepository = new TravelRepository();

    expect(async () => {
      await travelRepository.find("456ABC");
    }).rejects.toThrow("travel not found");
  });

  it("should find all trips", async () => {
    const travelRepository = new TravelRepository();
    const travel1 = new Travel(
      "123",
      "travel 1",
      "bali",
      "2",
      new Date(),
      new Date()
    );
    const travel2 = new Travel(
      "1223",
      "travel 2",
      "bali",
      "2",
      new Date(),
      new Date()
    );

    await travelRepository.create(travel1);
    await travelRepository.create(travel2);

    const trips = await travelRepository.findAll();

    expect(trips).toHaveLength(2);
    expect(trips).toContainEqual(travel1);
    expect(trips).toContainEqual(travel2);
  });
});
