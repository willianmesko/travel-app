import { v4 as uuid } from "uuid";

import Travel from "../entity/travel";

export default class TravelFactory {
  public static create(title: string): Travel {
    return new Travel(uuid(), title);
  }

  public static createWith(name: string): void {
    //not Implemented
  }
}
