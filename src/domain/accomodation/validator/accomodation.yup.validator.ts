import ValidatorInterface from "../../@shared/validator/validator.interface";
import * as yup from "yup";
import Accomodation from "../entity/accomodation";

export default class AccomodationYupValidator
  implements ValidatorInterface<Accomodation>
{
  validate(entity: Accomodation): void {
    try {
      yup
        .object()
        .shape({
          id: yup.string().required("Id is required"),
          travel_id: yup.string().required("Travel_Id is required"),
          title: yup.string().required("Title is required"),
          start_date: yup.date().required("Start date is required"),
          end_date: yup.date().required("End date is required"),
          address: yup.string().notRequired(),
          map: yup.string().notRequired(),
          reference_url: yup.string().notRequired(),
        })
        .validateSync(
          {
            id: entity.id,
            travel_id: entity.travel_id,
            title: entity.title,
            start_date: entity.start_date,
            end_date: entity.end_date,
          },
          {
            abortEarly: false,
          }
        );
    } catch (errors) {
      const e = errors as yup.ValidationError;
      e.errors.forEach((error) => {
        entity.notification.addError({
          context: "Accomodation",
          message: error,
        });
      });
    }
  }
}
