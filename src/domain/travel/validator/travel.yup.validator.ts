import ValidatorInterface from "../../@shared/validator/validator.interface";

import * as yup from "yup";
import Travel from "../entity/travel";

export default class TravelYupValidator implements ValidatorInterface<Travel> {
  validate(entity: Travel): void {
    try {
      yup
        .object()
        .shape({
          id: yup.string().required("Id is required"),
          title: yup.string().required("Title is required"),
          destination: yup.string().required("Destination is required"),
          userId: yup.string().required("userId is required"),
          start_date: yup.date().notRequired(),
          end_date: yup.date().notRequired(),
        })
        .validateSync(
          {
            id: entity.id,
            title: entity.title,
            destination: entity.destination,
            userId: entity.userId,
          },
          {
            abortEarly: false,
          }
        );
    } catch (errors) {
      const e = errors as yup.ValidationError;
      e.errors.forEach((error) => {
        entity.notification.addError({
          context: "Travel",
          message: error,
        });
      });
    }
  }
}
