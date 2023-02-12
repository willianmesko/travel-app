import Expense from "../../../domain/expense/entity/expense";
import ExpenseRepositoryInterface from "../../../domain/expense/repository/expense.repository";

import ExpenseModel from "./expense.model";

export default class ExpenseRepository implements ExpenseRepositoryInterface {
  async create(entity: Expense): Promise<void> {
    await ExpenseModel.create({
      id: entity.id,
      travel_id: entity.travel_id,
      price: entity.price,
      category: entity.category,
      title: entity.title,
      reference_url: entity.reference_url,
      date: entity.date,
    });
  }

  async find(id: string): Promise<Expense> {
    let expenseModel;

    try {
      expenseModel = await ExpenseModel.findOne({
        where: { id },
        rejectOnEmpty: true,
      });
    } catch (error) {
      throw new Error("expense not found");
    }

    return new Expense(
      expenseModel.id,
      expenseModel.travel_id,
      expenseModel.title,
      expenseModel.price,
      expenseModel.category,
      expenseModel.date,
      expenseModel.reference_url
    );
  }

  async update(entity: Expense): Promise<void> {
    await ExpenseModel.update(
      { title: entity.title },
      { where: { id: entity.id } }
    );
  }

  async findAll(): Promise<Expense[]> {
    const expenses = await ExpenseModel.findAll();

    return expenses.map(
      (expense) =>
        new Expense(
          expense.id,
          expense.travel_id,
          expense.title,
          expense.price,
          expense.category,
          expense.date,
          expense.reference_url
        )
    );
  }
}
