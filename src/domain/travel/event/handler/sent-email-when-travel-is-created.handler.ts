import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import TravelCreatedEvent from "../travel-created.event";

export default class SendEmailWhenTraveltIsCreatedHandler
  implements EventHandlerInterface<TravelCreatedEvent>
{
  handle(event: TravelCreatedEvent): void {
    console.log(`Sending email to .....`);
  }
}
