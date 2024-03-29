import RepositoryInterface from "../../@shared/repository/repository-interface";
import Expense from "../entity/expense";

export default interface ExpenseRepositoryInterface
  extends RepositoryInterface<Expense> {}
