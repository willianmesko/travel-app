import SendEmailWhenTraveltIsCreatedHandler from "../../travel/event/handler/sent-email-when-travel-is-created.handler";
import TravelCreatedEvent from "../../travel/event/travel-created.event";
import EventDispatcher from "./event-dispatcher";

describe("Domain events tests", () => {
  it("should register an event handler", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenTraveltIsCreatedHandler();

    eventDispatcher.register("TravelCreatedEvent", eventHandler);

    expect(
      eventDispatcher.getEventHandlers["TravelCreatedEvent"]
    ).toBeDefined();
    expect(eventDispatcher.getEventHandlers["TravelCreatedEvent"].length).toBe(
      1
    );
    expect(
      eventDispatcher.getEventHandlers["TravelCreatedEvent"][0]
    ).toMatchObject(eventHandler);
  });

  it("should unregister an event handler", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenTraveltIsCreatedHandler();

    eventDispatcher.register("TravelCreatedEvent", eventHandler);

    expect(
      eventDispatcher.getEventHandlers["TravelCreatedEvent"][0]
    ).toMatchObject(eventHandler);

    eventDispatcher.unregister("TravelCreatedEvent", eventHandler);

    expect(
      eventDispatcher.getEventHandlers["TravelCreatedEvent"]
    ).toBeDefined();
    expect(eventDispatcher.getEventHandlers["TravelCreatedEvent"].length).toBe(
      0
    );
  });

  it("should unregister all event handlers", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenTraveltIsCreatedHandler();

    eventDispatcher.register("TravelCreatedEvent", eventHandler);

    expect(
      eventDispatcher.getEventHandlers["TravelCreatedEvent"][0]
    ).toMatchObject(eventHandler);

    eventDispatcher.unregisterAll();

    expect(
      eventDispatcher.getEventHandlers["TravelCreatedEvent"]
    ).toBeUndefined();
  });

  it("should notify all event handlers", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenTraveltIsCreatedHandler();
    const spyEventHandler = jest.spyOn(eventHandler, "handle");

    eventDispatcher.register("TravelCreatedEvent", eventHandler);

    expect(
      eventDispatcher.getEventHandlers["TravelCreatedEvent"][0]
    ).toMatchObject(eventHandler);

    const travelCreatedEvent = new TravelCreatedEvent({
      title: "bali 1",
    });

    // Quando o notify for executado o SendEmailWhenTravelIsCreatedHandler.handle() deve ser chamado
    eventDispatcher.notify(travelCreatedEvent);

    expect(spyEventHandler).toHaveBeenCalled();
  });
});
