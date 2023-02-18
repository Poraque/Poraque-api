export class EventUseCase{
    constructor(EventRepository){
        this.eventRepository = EventRepository
    }

    async getAllEvents(){
        try{
            const start = 0
            const limit = 5 //Limite da tela de home

            const eventTypes = ["Turistico", "Hotel", "Festival", "Feira"];

            const events = [];

            for (const eventType of eventTypes) {
            
                const list = await this.eventRepository.getListEventsByType(start, limit, eventType);
                
                events.push(...list);
            }

            return events;
            
        }
        catch(err){
            //Dev
            console.log(err)
            return {'method':'getAllEvent',
                    'error': err}
            }

    }

    async searchEvents(pageNumber, itemsPerPage, search, eventType=null){
        
        try{
            const MAX_ITEMS_PER_PAGE = 20 
            const queryRegex = new RegExp(search, 'i');
            const eventTypeRegex = eventType ? new RegExp(eventType, 'i') :  new RegExp('')
            const page = Math.max(0, pageNumber) * itemsPerPage;
            let limit = Math.min(itemsPerPage, 1)

            limit =  Math.min(page + limit, MAX_ITEMS_PER_PAGE)
            
            const searchResult = this.eventRepository.searchEvents(page, limit, queryRegex, eventTypeRegex)

            return searchResult
        }catch(err){
            console.log(err)
            return {'method':'searchEvent',
                    'error': err}
        }
    }

    async getEventById(id){
        try{
            const event = this.eventRepository.getEventById(id)
     
            return event
             }catch(err){
                 return {'method':'getEvent',
                         'error': err}
             }
    }
}