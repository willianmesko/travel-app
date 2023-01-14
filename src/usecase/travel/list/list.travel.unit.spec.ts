import TravelFactory from "../../../domain/travel/factory/travel.factory";
import ListTravelUseCase from "./list.travel.usecase";

const travel1 = TravelFactory.create("bali");

const travel2 = TravelFactory.create("australia");
const MockRepository = () => {
  return {
    create: jest.fn(),
    find: jest.fn(),
    update: jest.fn(),
    findAll: jest.fn().mockReturnValue(Promise.resolve([travel1, travel2])),
  };
};

describe("Unit test for listing travel use case", () => {
  it("should list a travel", async () => {
    const repository = MockRepository();
    const useCase = new ListTravelUseCase(repository);

    const output = await useCase.execute({});

    expect(output.trips.length).toBe(2);
    expect(output.trips[0].id).toBe(travel1.id);
    expect(output.trips[0].title).toBe(travel1.title);

    expect(output.trips[1].id).toBe(travel1.id);
    expect(output.trips[1].title).toBe(travel1.title);
  });
});
