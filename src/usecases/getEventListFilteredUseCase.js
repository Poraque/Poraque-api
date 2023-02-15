
export class GetEventListFilteredUseCase{
    constructor(EventRepository){
        this.eventRepository = EventRepository
    }

    async execute(startQuery, category, stars){
       try{
            const limit = 10
            const start = startQuery * limit
            let query = {}
            if(category){
                query["event_type"] = category
            }
            if(stars){
                stars = stars < 0 ? 0:stars
                stars = stars > 5 ? 5:stars
                query["event_stars"] = {$gte:stars}
            }
            

            const listEvent = this.eventRepository.getEventListFiltered(start, limit,query)
            return listEvent
        }catch(err){
            console.log(err)
            return {'method':'getEvent',
                    'error': err}
        }
    }
}