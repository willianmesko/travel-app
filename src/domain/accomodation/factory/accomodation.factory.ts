import Accomodation from "../entity/accomodation";
import { v4 as uuid } from "uuid";
export default class AccomodationFactory {
  static create(
    travel_id: string,
    title: string,
    start_date: Date,
    end_date: Date,
    address?: string,
    map?: string,
    reference_url?: string
  ): Accomodation {
    return new Accomodation(
      uuid(),
      travel_id,
      title,
      start_date,
      end_date,
      address,
      map,
      reference_url
    );
  }
}
