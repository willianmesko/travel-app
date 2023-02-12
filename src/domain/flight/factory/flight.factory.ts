import Flight from "../entity/flight";
import { v4 as uuid } from "uuid";

export default class FlightFactory {
  static create(
    travel_id: string,
    title: string,
    from: string,
    to: string,
    airport: string,
    date: Date,
    code?: string,
    airline?: string,
    reference_url?: string
  ): Flight {
    console.log("here", travel_id);
    return new Flight(
      uuid(),
      travel_id,
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
