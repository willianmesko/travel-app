import Accomodation from "./accomodation";

describe("Accomodation unit test", () => {
  it("should throw and error when id is empty", () => {
    expect(() => {
      let accomodation = new Accomodation("", 'travel_id',"title", new Date(), new Date());
    }).toThrowError("Accomodation: Id is required");
  });
});
