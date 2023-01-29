import AccomodationFactory from "./accomodation.factory";

describe("Accomodation factory unit test", () => {
  it("should create a  accomodation", () => {
    const accomodation = AccomodationFactory.create(
      "title",
      new Date(),
      new Date(),
      "address",
      "map",
      "referecen_url"
    );

    expect(accomodation.id).toBeDefined();
    expect(accomodation.title).toBe("title");
  });
});
