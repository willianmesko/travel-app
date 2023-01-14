import Travel from "../../../domain/travel/entity/travel";
import TravelRepositoryInterface from "../../../domain/travel/repository/travel-repository.interface";
import { InputListTravelDto, OutputListTravelDto } from "./list.travel.dto";

export default class ListTravelUseCase {
  private travelRepository: TravelRepositoryInterface;
  constructor(TravelRepository: TravelRepositoryInterface) {
    this.travelRepository = TravelRepository;
  }

  async execute(input: InputListTravelDto): Promise<OutputListTravelDto> {
    const trips = await this.travelRepository.findAll();
    return OutputMapper.toOutput(trips);
  }
}

class OutputMapper {
  static toOutput(travel: Travel[]): OutputListTravelDto {
    return {
      trips: travel.map((trip) => ({
        id: trip.id,
        title: trip.title,
      })),
    };
  }
}
