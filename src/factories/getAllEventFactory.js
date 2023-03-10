import {GetAllEventCrotroller} from '../controllers/event/getAllEventController.js'
import {GetAllEventUseCase} from '../usecases/getAllEventUseCase.js'
import {EventRepository} from '../repositories/eventRepository.js'


export const getAllEventFactory = () =>{
    const eventRepository = new EventRepository()
    const getAllEvenUseCase = new GetAllEventUseCase(eventRepository)
    const getAllEventController = new GetAllEventCrotroller(getAllEvenUseCase)

    return getAllEventController
}