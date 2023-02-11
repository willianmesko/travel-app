import TravelModel from "./travel.model";
import Travel from "../../../../domain/travel/entity/travel";
import TravelRepositoryInterface from "../../../../domain/travel/repository/travel-repository.interface";

export default class TravelRepository implements TravelRepositoryInterface {
  async create(entity: Travel): Promise<void> {
    await TravelModel.create({
      id: entity.id,
      title: entity.title,
      destination: entity.destination,
      user_id: "",
      start_date: entity.start_date,
      end_date: entity.end_date,
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

    const travel = new Travel(
      id,
      travelModel.title,
      travelModel.destination,
      travelModel.user_id,
      travelModel.start_date,
      travelModel.end_date
    );

    return travel;
  }

  async findAll(): Promise<Travel[]> {
    const travelModels = await TravelModel.findAll();

    const trips = travelModels.map((travelModel) => {
      const travel = new Travel(
        travelModel.id,
        travelModel.title,
        travelModel.destination,
        travelModel.user_id,
        travelModel.start_date,
        travelModel.end_date
      );

      return travel;
    });

    return trips;
  }
}
