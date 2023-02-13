
export class GetEventUseCase{
    constructor(EventRepository){
        this.eventRepository = EventRepository
    }

    async execute(id){
       try{
       const event = this.eventRepository.getEvent(id)

       return event
        }catch(err){
            return {'method':'getEvent',
                    'error': err}
        }
    }
}