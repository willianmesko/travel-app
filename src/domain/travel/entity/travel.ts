import Entity from "../../@shared/entity/entity.abstract";

import NotificationError from "../../@shared/notification/notification.error";
import TravelValidatorFactory from "../factory/travel.validator.factory";

export default class Travel extends Entity {
  private _title: string;
  private _destination: string;
  private _userId: string;
  private _start_date?: Date;
  private _end_date?: Date;

  constructor(
    id: string,
    title: string,
    destination: string,
    userId: string,
    start_date: Date,
    end_date: Date
  ) {
    super();
    this._id = id;
    this._title = title;
    this._destination = destination;
    this._userId = userId;
    this._start_date = start_date;
    this._end_date = end_date;
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

  get userId(): string {
    return this._userId;
  }
  get start_date(): Date {
    return this._start_date;
  }

  get end_date(): Date {
    return this._end_date;
  }

  validate() {
    TravelValidatorFactory.create().validate(this);
  }

  changeTitle(title: string) {
    this._title = title;
    this.validate();
  }
}
