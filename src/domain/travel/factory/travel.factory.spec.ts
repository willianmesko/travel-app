import TravelFactory from "./travel.factory";

describe("Travel factory unit test", () => {
  it("should create a travel", () => {
    let travel = TravelFactory.create("Bali trip", "uuid", "Bali");

    expect(travel.id).toBeDefined();
    expect(travel.title).toBe("Bali trip");
  });
});
