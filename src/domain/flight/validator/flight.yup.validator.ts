import ValidatorInterface from "../../@shared/validator/validator.interface";
import Flight from "../entity/flight";
import * as yup from "yup";

export default class FlightYupValidator implements ValidatorInterface<Flight> {
  validate(entity: Flight): void {
    try {
      yup
        .object()
        .shape({
          id: yup.string().required("Id is required"),
          travel_id: yup.string().required("travel_id is required"),
          title: yup.string().required("Title is required"),
          from: yup.string().required("From is required"),
          to: yup.string().required("To is required"),
          code: yup.string().notRequired(),
          airport: yup.string().required("Airport is required"),
          airline: yup.string().notRequired(),
          date: yup.date().required("Date is required"),
          reference_url: yup.string().notRequired(),
        })
        .validateSync(
          {
            id: entity.id,
            travel_id: entity.travel_id,
            title: entity.title,
            from: entity.from,
            to: entity.to,
            airport: entity.airport,
            date: entity.date,
          },
          {
            abortEarly: false,
          }
        );
    } catch (errors) {
      const e = errors as yup.ValidationError;
      e.errors.forEach((error) => {
        entity.notification.addError({
          context: "Flight",
          message: error,
        });
      });
    }
  }
}
