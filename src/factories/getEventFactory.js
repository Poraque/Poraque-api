import {GetEventCrotroller} from '../controllers/event/getEventController.js'
import {GetEventUseCase} from '../usecases/getEventUseCase.js'
import {EventRepository} from '../repositories/eventRepository.js'


export const getEventFactory = () =>{
    const eventRepository = new EventRepository()
    const getEvenUseCase = new GetEventUseCase(eventRepository)
    const getEventController = new GetEventCrotroller(getEvenUseCase)

    return getEventController
}

