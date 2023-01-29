import Expense from "./expense";

describe("Expeses entity unit test", () => {
  it("should thrown a error when id is empty", () =>
    expect(() => {
      let expense = new Expense(
        "",
        "travel_id",
        "title",
        100,
        "category",
        new Date(),
        "reference_url"
      );
    }).toThrowError("Id is required"));

  it("should thrown a error when travel_id is empty", () =>
    expect(() => {
      let expense = new Expense(
        "id",
        "",
        "title",
        100,
        "category",
        new Date(),
        "reference_url"
      );
    }).toThrowError("Travel id is required"));

  it("should thrown a error when title is empty", () =>
    expect(() => {
      let expense = new Expense(
        "id",
        "travel_id",
        "",
        100,
        "category",
        new Date(),
        "reference_url"
      );
    }).toThrowError("Title is required"));
});
