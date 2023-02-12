import Accomodation from "../../../domain/accomodation/entity/accomodation";
import { AccomodationRepositoryInterface } from "../../../domain/accomodation/repository/acomodation.repository";
import AccomodationModel from "./accomodation.model";

export default class AccomodationRepository
  implements AccomodationRepositoryInterface
{
  async create(entity: Accomodation): Promise<void> {
    await AccomodationModel.create({
      id: entity.id,
      travel_id: entity.travel_id,
      title: entity.title,
      start_date: entity.start_date,
      end_date: entity.end_date,
      address: entity.address,
      map: entity.map,
      reference_url: entity.reference_url,
    });
  }

  async find(id: string): Promise<Accomodation> {
    let accomodationModel;

    try {
      accomodationModel = await AccomodationModel.findOne({
        where: { id },
        rejectOnEmpty: true,
      });
    } catch (error) {
      throw new Error("accomotation not found");
    }

    return new Accomodation(
      accomodationModel.id,
      accomodationModel.travel_id,
      accomodationModel.title,
      accomodationModel.start_date,
      accomodationModel.end_date,
      accomodationModel.address,
      accomodationModel.map,
      accomodationModel.reference_url
    );
  }

  async update(entity: Accomodation): Promise<void> {
    await AccomodationModel.update(
      { title: entity.title },
      { where: { id: entity.id } }
    );
  }

  async findAll(): Promise<Accomodation[]> {
    const accomodations = await AccomodationModel.findAll();

    return accomodations.map(
      (accomodation) =>
        new Accomodation(
          accomodation.id,
          accomodation.travel_id,
          accomodation.title,
          accomodation.start_date,
          accomodation.end_date,
          accomodation.address,
          accomodation.map,
          accomodation.reference_url
        )
    );
  }
}
