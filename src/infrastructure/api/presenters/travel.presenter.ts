import { toXML } from "jstoxml";
import { OutputListTravelDto } from "../../../usecase/travel/list/list.travel.dto";

export default class TravelPreseter {
  static listXML(data: OutputListTravelDto): string {
    const xmlOption = {
      header: true,
      indent: "  ",
      newline: "\n",
      allowEmpty: true,
    };

    return toXML(
      {
        trips: {
          travel: data.trips.map((travel) => ({
            id: travel.id,
            title: travel.title,
          })),
        },
      },
      xmlOption
    );
  }
}
