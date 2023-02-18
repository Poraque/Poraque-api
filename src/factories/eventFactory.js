import { EventController } from "../controllers/event/eventController.js";
import { EventUseCase } from "../usecases/eventUseCase.js";
import { EventRepository } from "../repositories/eventRepository.js";


export const eventFactory = () => {
    const eventRepository = new EventRepository()
    const eventUseCase = new EventUseCase(eventRepository)
    const eventController = new EventController(eventUseCase)

    return eventController
}
