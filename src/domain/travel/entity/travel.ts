import Entity from "../../@shared/entity/entity.abstract";

import NotificationError from "../../@shared/notification/notification.error";
import TravelValidatorFactory from "../factory/travel.validator.factory";

export default class Travel extends Entity {
  private _title: string;
  private destination!: string;
  private user_id: number;

  constructor(id: string, title: string) {
    super();
    this._id = id;
    this._title = title;
    this.validate();
    if (this.notification.hasErrors()) {
      throw new NotificationError(this.notification.getErrors());
    }
  }

  get title(): string {
    return this._title;
  }

  validate() {
    TravelValidatorFactory.create().validate(this);
  }

  changeTitle(title: string) {
    this._title = title;
    this.validate();
  }
}
