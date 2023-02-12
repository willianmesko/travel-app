import { v4 as uuid } from "uuid";

import Travel from "../entity/travel";

export default class TravelFactory {
  public static create(
    title: string,
    user_id: string,
    destination: string,
    start_date?: Date,
    end_date?: Date
  ): Travel {
    return new Travel(
      uuid(),
      title,
      destination,
      user_id,
      start_date,
      end_date
    );
  }

  public static createWith(name: string): void {
    //not Implemented
  }
}
