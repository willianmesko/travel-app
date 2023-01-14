import {
  InputCreateTravelDto,
  OutputCreateTravelDto,
} from "./create.travel.dto";
import { v4 as uuid } from "uuid";

import TravelRepository from "../../../infrastructure/travel/repository/sequelize/travel.repository";
import TravelRepositoryInterface from "../../../domain/travel/repository/travel-repository.interface";
import TravelFactory from "../../../domain/travel/factory/travel.factory";

export default class CreateTravelUseCase {
  private travelRepository: TravelRepositoryInterface;

  constructor(TravelRepository: TravelRepositoryInterface) {
    this.travelRepository = TravelRepository;
  }

  async execute(input: InputCreateTravelDto): Promise<OutputCreateTravelDto> {
    const travel = TravelFactory.create(input.title);

    await this.travelRepository.create(travel);

    return {
      id: travel.id,
      title: travel.title,
    };
  }
}
