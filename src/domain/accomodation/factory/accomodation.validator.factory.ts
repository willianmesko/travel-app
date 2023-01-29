import ValidatorInterface from "../../@shared/validator/validator.interface";
import Accomodation from "../entity/accomodation";
import AccomodationYupValidator from "../validator/accomodation.yup.validator";

export default class AccomodationValidatorFactory {
  static create(): ValidatorInterface<Accomodation> {
    return new AccomodationYupValidator();
  }
}
