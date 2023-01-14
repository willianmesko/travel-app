import TravelModel from "./travel.model";
import Travel from "../../../../domain/travel/entity/travel";
import TravelRepositoryInterface from "../../../../domain/travel/repository/travel-repository.interface";

export default class TravelRepository implements TravelRepositoryInterface {
  async create(entity: Travel): Promise<void> {
    await TravelModel.create({
      id: entity.id,
      title: entity.title,
    });
  }

  async update(entity: Travel): Promise<void> {
    await TravelModel.update(
      {
        title: entity.title,
      },
      {
        where: {
          id: entity.id,
        },
      }
    );
  }

  async find(id: string): Promise<Travel> {
    let travelModel;
    try {
      travelModel = await TravelModel.findOne({
        where: {
          id,
        },
        rejectOnEmpty: true,
      });
    } catch (error) {
      throw new Error("Travel not found");
    }

    const travel = new Travel(id, travelModel.title);

    return travel;
  }

  async findAll(): Promise<Travel[]> {
    const travelModels = await TravelModel.findAll();

    const trips = travelModels.map((travelModel) => {
      const travel = new Travel(travelModel.id, travelModel.title);

      return travel;
    });

    return trips;
  }
}
