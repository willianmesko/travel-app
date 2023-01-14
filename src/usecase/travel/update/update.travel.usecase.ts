import TravelRepositoryInterface from "../../../domain/travel/repository/travel-repository.interface";

import {
  InputUpdateTravelDto,
  OutputUpdateTravelDto,
} from "./update.travel.dto";

export default class UpdateTravelUseCase {
  private TravelRepository: TravelRepositoryInterface;
  constructor(TravelRepository: TravelRepositoryInterface) {
    this.TravelRepository = TravelRepository;
  }

  async execute(input: InputUpdateTravelDto): Promise<OutputUpdateTravelDto> {
    const travel = await this.TravelRepository.find(input.id);
    travel.changeTitle(input.title);

    await this.TravelRepository.update(travel);

    return {
      id: travel.id,
      title: travel.title,
    };
  }
}
