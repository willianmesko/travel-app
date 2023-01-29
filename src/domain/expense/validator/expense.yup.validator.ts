import ValidatorInterface from "../../@shared/validator/validator.interface";
import Expense from "../entity/expense";
import * as yup from "yup";

export default class ExpenseYupValidator
  implements ValidatorInterface<Expense>
{
  validate(entity: Expense): void {
    try {
      yup
        .object()
        .shape({
          id: yup.string().required("Id is required"),
          travel_id: yup.string().required("Travel id is required"),
          title: yup.string().required("Title is required"),
          price: yup.number().required("Price is required"),
          date: yup.date().notRequired(),
          category: yup.string().notRequired(),
        })
        .validateSync(
          {
            id: entity.id,
            travel_id: entity.travel_id,
            title: entity.title,
            price: entity.price,
          },
          { abortEarly: false }
        );
    } catch (errors) {
      const e = errors as yup.ValidationError;
      e.errors.forEach((error) => {
        entity.notification.addError({
          context: "Expense",
          message: error,
        });
      });
    }
  }
}
