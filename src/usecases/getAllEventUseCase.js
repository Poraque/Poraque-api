export class GetAllEventUseCase{
    constructor(EventRepository){
        this.eventRepository = EventRepository
    }

    async execute(start, limit){
       try{
       const listEvent = this.eventRepository.getAllEvent(start, limit)

       return listEvent
        }catch(err){
            return {'method':'getEvent',
                    'error': err}
        }
    }
}