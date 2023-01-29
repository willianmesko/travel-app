import ExpenseFactory from "./expense.factory";

describe("Expense Factory unit test", () => {
  it("should create a Expense", () => {
    const expense = ExpenseFactory.create("travel_id", "title", 100);

    expect(expense.id).toBeDefined();
    expect(expense.title).toBe("title");
  });
});
