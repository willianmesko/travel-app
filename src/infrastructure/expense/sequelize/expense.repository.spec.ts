import { Sequelize } from "sequelize-typescript";
import AccomodationFactory from "../../../domain/accomodation/factory/accomodation.factory";
import ExpenseFactory from "../../../domain/expense/factory/expense.factory";

import ExpenseModel from "./expense.model";
import ExpenseRepository from "./expense.repository";

describe("Accomodation Repository unit test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    await sequelize.addModels([ExpenseModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should create a expense", async () => {
    const expense = ExpenseFactory.create(
      "travel_id",
      "title",
      100,
      "FOOD",
      new Date(),
      "reference_url"
    );

    const repository = new ExpenseRepository();

    await repository.create(expense);

    const findExpense = await ExpenseModel.findOne({
      where: { id: expense.id },
    });

    expect(findExpense).toBeDefined();
    expect(findExpense.id).toBe(expense.id);
  });

  it("should find a expense", async () => {
    const expense = ExpenseFactory.create(
      "travel_id",
      "title",
      100,
      "FOOD",
      new Date(),
      "reference_url"
    );

    const repository = new ExpenseRepository();

    await repository.create(expense);

    const findExpense = await repository.find(expense.id);

    expect(findExpense).toBeDefined();
    expect(findExpense.title).toBe(expense.title);
    expect(findExpense.id).toBe(expense.id);
  });

  it("should find all expenses", async () => {
    const expense1 = ExpenseFactory.create(
      "travel_id",
      "title",
      100,
      "FOOD",
      new Date(),
      "reference_url"
    );

    const expense2 = ExpenseFactory.create(
      "travel_id",
      "title2",
      420,
      "FOOD",
      new Date(),
      "reference_url"
    );

    const repository = new ExpenseRepository();

    await repository.create(expense1);
    await repository.create(expense2);

    const expenses = await repository.findAll();

    expect(expenses.length).toBe(2);
    expect(expenses[0].title).toBe(expense1.title);
    expect(expenses[0].price).toBe(expense1.price);
    expect(expenses[1].title).toBe(expense2.title);
    expect(expenses[1].price).toBe(expense2.price);
  });

  //   it("should update a accomodation", async () => {
  //     const repository = new FlightRepository();
  //     const flight = FlightFactory.create(
  //       "travel_id",
  //       "title",
  //       "from",
  //       "to",
  //       "airport",
  //       new Date(),
  //       "code",
  //       "airline",
  //       "reference_url"
  //     );

  //     await repository.create(flight);
  //   });
});
