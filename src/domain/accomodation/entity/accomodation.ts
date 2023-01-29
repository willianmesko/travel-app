import Entity from "../../@shared/entity/entity.abstract";
import NotificationError from "../../@shared/notification/notification.error";
import AccomodationValidatorFactory from "../factory/accomodation.validator.factory";

export default class Accomodation extends Entity {
  private _title: string;
  private _start_date: Date;
  private _end_date: Date;
  private _address: string;
  private _map: string;
  private _reference_url: string;

  constructor(
    id: string,
    title: string,
    start_date: Date,
    end_date: Date,
    address?: string,
    map?: string,
    reference_url?: string
  ) {
    super();
    this._id = id;
    this._title = title;
    this._start_date = start_date;
    this._end_date = end_date;
    this._address = address;
    this._map = map;
    this._reference_url = reference_url;
    this.validate();
    if (this.notification.hasErrors()) {
      throw new NotificationError(this.notification.getErrors());
    }
  }

  get title(): string {
    return this._title;
  }

  get start_date(): Date {
    return this._start_date;
  }

  get end_date(): Date {
    return this._end_date;
  }

  validate() {
    return AccomodationValidatorFactory.create().validate(this);
  }
}
