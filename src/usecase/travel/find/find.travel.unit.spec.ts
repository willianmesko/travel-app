import { Sequelize } from "sequelize-typescript";
import Travel from "../../../domain/travel/entity/travel";

import FindTravelUseCase from "./find.travel.usecase";

const travel = new Travel("123", "bali");

const MockRepository = () => {
  return {
    find: jest.fn().mockReturnValue(Promise.resolve(travel)),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  };
};

describe("Unit Test find travel use case", () => {
  it("should find a travel", async () => {
    const travelRepository = MockRepository();
    const usecase = new FindTravelUseCase(travelRepository);

    const input = {
      id: "123",
    };

    const output = {
      id: "123",
      title: "bali",
    };

    const result = await usecase.execute(input);

    expect(result).toEqual(output);
  });

  it("should not find a travel", async () => {
    const travelRepository = MockRepository();
    travelRepository.find.mockImplementation(() => {
      throw new Error("Travel not found");
    });
    const usecase = new FindTravelUseCase(travelRepository);

    const input = {
      id: "123",
    };

    expect(() => {
      return usecase.execute(input);
    }).rejects.toThrow("Travel not found");
  });
});
