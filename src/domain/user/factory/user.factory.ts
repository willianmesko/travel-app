import { v4 as uuid } from "uuid";
import User from "../entity/user";

export default class TravelFactory {
  public static create(username: string, email: string) {
    return new User(uuid(), "username", "mail@mail.com");
  }
}
