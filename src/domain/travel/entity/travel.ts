import Entity from "../../@shared/entity/entity.abstract";

import NotificationError from "../../@shared/notification/notification.error";
import TravelValidatorFactory from "../factory/travel.validator.factory";

export default class Travel extends Entity {
  private _title: string;
  private _destination: string;
  private _user_id: string;
  private start_date?: Date;
  private end_date?: Date;

  constructor(
    id: string,
    title: string,
    destination: string,
    user_id: string,
    start_date: Date,
    end_date: Date
  ) {
    super();
    this._id = id;
    this._title = title;
    this._destination = destination;
    this._user_id = user_id;
    this.start_date = start_date;
    this.end_date = end_date;
    this.validate();
    if (this.notification.hasErrors()) {
      throw new NotificationError(this.notification.getErrors());
    }
  }

  get title(): string {
    return this._title;
  }

  get destination(): string {
    return this._destination;
  }

  get user_id(): string {
    return this._user_id;
  }

  validate() {
    TravelValidatorFactory.create().validate(this);
  }

  changeTitle(title: string) {
    this._title = title;
    this.validate();
  }
}
