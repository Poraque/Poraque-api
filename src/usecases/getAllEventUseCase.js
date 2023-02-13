export class GetAllEventUseCase{
    constructor(EventRepository){
        this.eventRepository = EventRepository
    }

    async execute(){
        try{
            const start = 0
            const limit = 5 //Limite da tela de home

            const listEvent = await this.eventRepository.getListEventsByType(start, limit, "Turistico") 
            const listHotel = await this.eventRepository.getListEventsByType(start, limit, "Hotel")
            const listFestival = await this.eventRepository.getListEventsByType(start, limit, "Festival")
            const listFair = await this.eventRepository.getListEventsByType(start, limit, "Feira")


            const listAllEvent = listEvent
            .concat(listHotel)
            .concat(listFestival)
            .concat(listFair)
            

            return listAllEvent
        }
        catch(err){
            //Dev
            return {'method':'getAllEvent',
                    'error': err}
            }
    }
}