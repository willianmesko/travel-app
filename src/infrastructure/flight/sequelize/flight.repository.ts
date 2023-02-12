import Flight from "../../../domain/flight/entity/flight";
import FlightRepositoryInterface from "../../../domain/flight/repository/flight-repository.interface";

import FlightModel from "./flight.model";

export default class FlightRepository implements FlightRepositoryInterface {
  async create(entity: Flight): Promise<void> {
    await FlightModel.create({
      id: entity.id,
      travel_id: entity.travel_id,
      title: entity.title,
      from: entity.from,
      to: entity.to,
      code: entity.code,
      airline: entity.airline,
      airport: entity.airport,
      date: entity.date,
      reference_url: entity.reference_url,
    });
  }

  async find(id: string): Promise<Flight> {
    let flightModel;

    try {
      flightModel = await FlightModel.findOne({
        where: { id },
        rejectOnEmpty: true,
      });
    } catch (error) {
      throw new Error("flight not found");
    }

    return new Flight(
      id,
      flightModel.travel_id,
      flightModel.title,
      flightModel.from,
      flightModel.to,
      flightModel.airline,
      flightModel.date,
      flightModel.code,
      flightModel.airline,
      flightModel.reference_url
    );
  }

  async update(entity: Flight): Promise<void> {
    await FlightModel.update(
      { title: entity.title },
      { where: { id: entity.id } }
    );
  }

  async findAll(): Promise<Flight[]> {
    const flights = await FlightModel.findAll();

    return flights.map(
      (flight) =>
        new Flight(
          flight.id,
          flight.travel_id,
          flight.title,
          flight.from,
          flight.to,
          flight.airline,
          flight.date,
          flight.code,
          flight.airline,
          flight.reference_url
        )
    );
  }
}
