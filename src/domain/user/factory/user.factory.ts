import { v4 as uuid } from "uuid";
import User from "../entity/user";

export default class UserFactory {
  public static create(username: string, email: string) {
    return new User(uuid(), username, email);
  }
}
