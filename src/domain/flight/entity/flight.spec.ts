import Flight from "./flight";

describe("Flight unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let flight = new Flight(
        "",
        "Bahamas",
        "Brasil",
        "Bahamas",
        "Airport",
        new Date()
      );
    }).toThrowError("Flight: Id is required");
  });

  it("should throw error when title is empty", () => {
    expect(() => {
      let flight = new Flight(
        "id",
        "",
        "Brasil",
        "Bahamas",
        "Airport",
        new Date()
      );
    }).toThrowError("Flight: Title is required");
  });

  it("should throw error when From and To is empty", () => {
    expect(() => {
      let flight = new Flight("id", "title", "", "", "Airport", new Date());
    }).toThrowError("Flight: From is required");
  });
});
