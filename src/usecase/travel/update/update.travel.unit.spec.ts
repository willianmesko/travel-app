import TravelFactory from "../../../domain/travel/factory/travel.factory";
import UpdateTravelUseCase from "./update.travel.usecase";

import UpdateCustomerUseCase from "./update.travel.usecase";
const travel = TravelFactory.create("Bali");

const input = {
  id: travel.id,
  title: "bali Updated",
};

const MockRepository = () => {
  return {
    create: jest.fn(),
    findAll: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(travel)),
    update: jest.fn(),
  };
};

describe("Unit test for travel update use case", () => {
  it("should update a travel", async () => {
    const travelRepository = MockRepository();
    const travelUpdateUseCase = new UpdateTravelUseCase(travelRepository);

    const output = await travelUpdateUseCase.execute(input);

    expect(output).toEqual(input);
  });
});
