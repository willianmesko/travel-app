import CreateTravelUseCase from "./create.travel.usecase";
const input = {
  title: "bali",
};

const MockRepository = () => {
  return {
    find: jest.fn(),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  };
};

describe("Unit test create travel use case", () => {
  it("should create a travel", async () => {
    const travelRepository = MockRepository();
    const travelCreateUseCase = new CreateTravelUseCase(travelRepository);

    const output = await travelCreateUseCase.execute(input);

    expect(output).toEqual({
      id: expect.any(String),
      title: input.title,
    });
  });

  it("should thrown an error when title is missing", async () => {
    const travelRepository = MockRepository();
    const travelCreateUseCase = new CreateTravelUseCase(travelRepository);

    input.title = "";

    await expect(travelCreateUseCase.execute(input)).rejects.toThrow(
      "Title is required"
    );
  });
});
