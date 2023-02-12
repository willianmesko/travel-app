import Entity from "../../@shared/entity/entity.abstract";
import NotificationError from "../../@shared/notification/notification.error";
import ExpenseValidatorFactory from "../factory/expense.validator.factory";

export default class Expense extends Entity {
  private _travel_id: string;
  private _title: string;
  private _price: number;
  private _category: string;
  private _date: Date;
  private _reference_url: string;
  constructor(
    id: string,
    travel_id: string,
    title: string,
    price: number,
    category?: string,
    date?: Date,
    reference_url?: string
  ) {
    super();
    this._id = id;
    this._travel_id = travel_id;
    this._title = title;
    this._price = price;
    this._category = category;
    this._date = date;
    this._reference_url = reference_url;
    this.validate();
    if (this.notification.hasErrors()) {
      throw new NotificationError(this.notification.getErrors());
    }
  }

  validate() {
    ExpenseValidatorFactory.create().validate(this);
  }

  get travel_id(): string {
    return this._travel_id;
  }

  get title(): string {
    return this._title;
  }

  get category(): string {
    return this._category;
  }

  get reference_url(): string {
    return this._reference_url;
  }

  get date(): Date {
    return this._date;
  }

  get price(): number {
    return this._price;
  }
}
