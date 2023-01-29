import Travel from "./travel";

describe("Travel unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let travel = new Travel(
        "",
        "John",
        "bali",
        "user_id",
        new Date(),
        new Date()
      );
    }).toThrowError("Travel: Id is required");
  });

  it("should throw error when title is empty", () => {
    expect(() => {
      let travel = new Travel(
        "id",
        "",
        "bali",
        "user_id",
        new Date(),
        new Date()
      );
    }).toThrowError("Travel: Title is required");
  });

  it("should throw error when destination is empty", () => {
    expect(() => {
      let travel = new Travel(
        "id",
        "title",
        "",
        "user_id",
        new Date(),
        new Date()
      );
    }).toThrowError("Travel: Destination is required");
  });

  it("should throw error when title is and id are empty", () => {
    expect(() => {
      let travel = new Travel("", "", "", "user_id", new Date(), new Date());
    }).toThrowError("Travel: Id is required,Travel: Title is required");
  });

  it("should change title", () => {
    // Arrange
    const travel = new Travel(
      "id",
      "title",
      "australia",
      "user_id",
      new Date(),
      new Date()
    );

    // Act
    travel.changeTitle("australia");

    // Assert
    expect(travel.title).toBe("australia");
  });
});
