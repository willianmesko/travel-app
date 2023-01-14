import ValidatorInterface from "../../@shared/validator/validator.interface";
import Travel from "../entity/travel";
import TravelYupValidator from "../validator/travel.yup.validator";

export default class TravelValidatorFactory {
  static create(): ValidatorInterface<Travel> {
    return new TravelYupValidator();
  }
}
