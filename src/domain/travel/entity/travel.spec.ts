import Travel from "./travel";

describe("Travel unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let travel = new Travel("", "John");
    }).toThrowError("Travel: Id is required");
  });

  it("should throw error when title is empty", () => {
    expect(() => {
      let travel = new Travel("123", "");
    }).toThrowError("Travel: title is required");
  });

  it("should throw error when title is and id are empty", () => {
    expect(() => {
      let travel = new Travel("", "");
    }).toThrowError("Travel: Id is required,Travel: Title is required");
  });

  it("should change title", () => {
    // Arrange
    const travel = new Travel("123", "bali");

    // Act
    travel.changeTitle("australia");

    // Assert
    expect(travel.title).toBe("australia");
  });
});
