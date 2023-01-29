import Expense from "../entity/expense";
import { v4 as uuid } from "uuid";

export default class ExpenseFactory {
  static create(
    travel_id: string,
    title: string,
    price: number,
    category?: string,
    date?: Date,
    reference_url?: string
  ): Expense {
    return new Expense(
      uuid(),
      travel_id,
      title,
      price,
      category,
      date,
      reference_url
    );
  }
}
