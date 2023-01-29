import ValidatorInterface from "../../@shared/validator/validator.interface";
import Flight from "../entity/flight";
import FlightYupValidator from "../validator/flight.yup.validator";

export default class FlightValidatorFactory {
  static create(): ValidatorInterface<Flight> {
    return new FlightYupValidator();
  }
}
