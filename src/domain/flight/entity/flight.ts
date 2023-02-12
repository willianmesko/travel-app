import Entity from "../../@shared/entity/entity.abstract";
import NotificationError from "../../@shared/notification/notification.error";
import FlightValidatorFactory from "../factory/flight.validator.factory";

export default class Flight extends Entity {
  private _travel_id: string;
  private _title: string;
  private _from: string;
  private _to: string;
  private _airport: string;
  private _code: string;
  private _airline: string;
  private _date: Date;
  private _reference_url: string;
  constructor(
    id: string,
    travel_id: string,
    title: string,
    from: string,
    to: string,
    airport: string,
    date: Date,
    code?: string,
    airline?: string,
    reference_url?: string
  ) {
    super();
    this._id = id;
    this._travel_id = travel_id;
    this._title = title;
    this._from = from;
    this._to = to;
    this._airport = airport;
    this._airline = airline;
    this._code = code;
    this._date = date;
    this._reference_url = reference_url;
    this.validate();

    if (this.notification.hasErrors()) {
      throw new NotificationError(this.notification.getErrors());
    }
  }

  validate() {
    FlightValidatorFactory.create().validate(this);
  }

  get id(): string {
    return this._id;
  }

  get travel_id(): string {
    return this._travel_id;
  }

  get title(): string {
    return this._title;
  }

  get code(): string {
    return this._code;
  }

  get from(): string {
    return this._from;
  }

  get to(): string {
    return this._to;
  }

  get airport(): string {
    return this._airport;
  }

  get airline(): string {
    return this._airline;
  }

  get reference_url(): string {
    return this._reference_url;
  }

  get date(): Date {
    return this._date;
  }
}
