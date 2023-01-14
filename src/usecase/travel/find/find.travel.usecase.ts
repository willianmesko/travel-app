import TravelRepositoryInterface from "../../../domain/travel/repository/travel-repository.interface";
import { InputFindTravelDto, OutputFindTravelDto } from "./find.travel.dto";

export default class FindTravelUseCase {
  private travelRepository: TravelRepositoryInterface;

  constructor(travelRepository: TravelRepositoryInterface) {
    this.travelRepository = travelRepository;
  }

  async execute(input: InputFindTravelDto): Promise<OutputFindTravelDto> {
    const travel = await this.travelRepository.find(input.id);

    return {
      id: travel.id,
      title: travel.title,
    };
  }
}
