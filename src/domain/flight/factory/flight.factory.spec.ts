import FlightFactory from "./flight.factory";

describe("Flight factory unit test", () => {
  it("should create a flight", () => {
    let flight = FlightFactory.create(
		"travel_id",
      "title",
      "Brasil",
      "Australia",
      "airport",
      new Date(),
      "code",
      "airline",
      "reference_url"
    );

    expect(flight.id).toBeDefined();
    expect(flight.from).toBe("Brasil");
    expect(flight.to).toBe("Australia");
  });
});
