import { EventRepository } from "../repositories/eventRepository.js"
import { GetEventListFilteredUseCase } from "../usecases/getEventListFilteredUseCase.js"
import { GetEventListFilteredCrotroller } from "../controllers/event/getEventListFilteredController.js"


export const getEventListFilteredFactory = () =>{
    const eventRepository = new EventRepository()
    const getEventListFilteredUseCase = new GetEventListFilteredUseCase(eventRepository)
    const getEventListFilteredController = new GetEventListFilteredCrotroller(getEventListFilteredUseCase)

    return getEventListFilteredController
}