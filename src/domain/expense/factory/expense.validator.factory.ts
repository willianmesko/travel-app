import ValidatorInterface from "../../@shared/validator/validator.interface";
import Expense from "../entity/expense";
import ExpenseYupValidator from "../validator/expense.yup.validator";

export default class ExpenseValidatorFactory {
  static create(): ValidatorInterface<Expense> {
    return new ExpenseYupValidator();
  }
}
