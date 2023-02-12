import Entity from "../../@shared/entity/entity.abstract";
import NotificationError from "../../@shared/notification/notification.error";
import UserFactoryValidator from "../factory/user.validator.factory";

export default class User extends Entity {
  private _username: string;
  private _email: string;

  constructor(id: string, username: string, email: string) {
    super();
    this._id = id;
    this._email = email;
    this._username = username;
    this.validate();
    if (this.notification.hasErrors()) {
      throw new NotificationError(this.notification.getErrors());
    }
  }

  get username(): string {
    return this._username;
  }

  get email(): string {
    return this._email;
  }

  validate() {
    UserFactoryValidator.create().validate(this);
  }

  changeUsername(username: string) {
    this._username = username;
    this.validate();
  }
}
