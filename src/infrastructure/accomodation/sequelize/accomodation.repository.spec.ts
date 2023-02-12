import { Sequelize } from "sequelize-typescript";
import AccomodationFactory from "../../../domain/accomodation/factory/accomodation.factory";

import AccomodationModel from "./accomodation.model";
import AccomodationRepository from "./accomodation.repository";

describe("Accomodation Repository unit test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    await sequelize.addModels([AccomodationModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });
  it("should create a accomodation", async () => {
    const accomodation = AccomodationFactory.create(
      "travel_id",
      "title",
      new Date(),
      new Date(),
      "address",
      "map",
      "reference_url"
    );

    const repository = new AccomodationRepository();

    await repository.create(accomodation);

    const findAccomodation = await AccomodationModel.findOne({
      where: { id: accomodation.id },
    });

    expect(findAccomodation).toBeDefined();
    expect(findAccomodation.id).toBe(accomodation.id);
  });
  it("should find a accomodation", async () => {
    const accomodation = AccomodationFactory.create(
      "travel_id",
      "title",
      new Date(),
      new Date(),
      "address",
      "map",
      "reference_url"
    );

    const repository = new AccomodationRepository();

    await repository.create(accomodation);

    const findAccomodation = await repository.find(accomodation.id);

    expect(findAccomodation).toBeDefined();
    expect(findAccomodation.title).toBe(accomodation.title);
    expect(findAccomodation.id).toBe(accomodation.id);
  });
  it("should find all accomodations", async () => {
    const accomodation1 = AccomodationFactory.create(
      "travel_id1",
      "title1",
      new Date(),
      new Date(),
      "address",
      "map",
      "reference_url"
    );

    const accomodation2 = AccomodationFactory.create(
      "travel_id2",
      "title2",
      new Date(),
      new Date(),
      "address",
      "map",
      "reference_url"
    );

    const repository = new AccomodationRepository();

    await repository.create(accomodation1);
    await repository.create(accomodation2);

    const accomodations = await repository.findAll();

    expect(accomodations.length).toBe(2);
    expect(accomodations[0].title).toBe(accomodation1.title);
    expect(accomodations[0].address).toBe(accomodation1.address);
    expect(accomodations[1].title).toBe(accomodation2.title);
    expect(accomodations[1].address).toBe(accomodation2.address);
  });

  //   it("should update a accomodation", async () => {
  //     const repository = new FlightRepository();
  //     const flight = FlightFactory.create(
  //       "travel_id",
  //       "title",
  //       "from",
  //       "to",
  //       "airport",
  //       new Date(),
  //       "code",
  //       "airline",
  //       "reference_url"
  //     );

  //     await repository.create(flight);
  //   });
});
