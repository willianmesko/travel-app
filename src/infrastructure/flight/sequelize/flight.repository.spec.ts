import { Sequelize } from "sequelize-typescript";
import FlightFactory from "../../../domain/flight/factory/flight.factory";

import FlightModel from "./flight.model";
import FlightRepository from "./flight.repository";

describe("Flight Repository unit test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    await sequelize.addModels([FlightModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });
  it("should create a flight", async () => {
    const flight = FlightFactory.create(
      "travel_id",
      "title",
      "from",
      "to",
      "airport",
      new Date(),
      "code",
      "airline",
      "reference_url"
    );

    const repository = new FlightRepository();

    await repository.create(flight);

    const findFlight = await FlightModel.findOne({ where: { id: flight.id } });

    expect(findFlight).toBeDefined();
    expect(findFlight.id).toBe(flight.id);
  });
  it("should find a flight", async () => {
    const flight = FlightFactory.create(
      "travel_id",
      "title",
      "from",
      "to",
      "airport",
      new Date(),
      "code",
      "airline",
      "reference_url"
    );

    const repository = new FlightRepository();

    await repository.create(flight);

    const flindFlight = await repository.find(flight.id);

    expect(flindFlight).toBeDefined();
    expect(flindFlight.code).toBe(flight.code);
    expect(flindFlight.airline).toBe(flight.airline);
  });
  it("should find all users", async () => {
    const flight1 = FlightFactory.create(
      "travel_id",
      "title",
      "from",
      "to",
      "airport",
      new Date(),
      "code",
      "airline",
      "reference_url"
    );

    const flight2 = FlightFactory.create(
      "travel_id2",
      "title2",
      "from2",
      "to",
      "airport",
      new Date(),
      "code",
      "airline",
      "reference_url"
    );

    const repository = new FlightRepository();

    await repository.create(flight1);
    await repository.create(flight2);

    const flights = await repository.findAll();

    expect(flights.length).toBe(2);
    expect(flights[0].code).toBe(flight1.code);
    expect(flights[0].airline).toBe(flight1.airline);
    expect(flights[1].code).toBe(flight2.code);
    expect(flights[1].airport).toBe(flight2.airline);
  });

  it("should update a user", async () => {
    const repository = new FlightRepository();
    const flight = FlightFactory.create(
      "travel_id",
      "title",
      "from",
      "to",
      "airport",
      new Date(),
      "code",
      "airline",
      "reference_url"
    );

    await repository.create(flight);
  });
});
