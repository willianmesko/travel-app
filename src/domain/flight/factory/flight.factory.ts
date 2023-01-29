import Flight from "../entity/flight";
import { v4 as uuid } from "uuid";

export default class FlightFactory {
  static create(
    title: string,
    from: string,
    to: string,
    airport: string,
    date: Date,
    code?: string,
    airline?: string,
    reference_url?: string
  ): Flight {
    return new Flight(
      uuid(),
      title,
      from,
      to,
      airport,
      date,
      code,
      airline,
      reference_url
    );
  }
}
