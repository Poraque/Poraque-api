import {poraque_event} from '../models/poraqueEvent.js'

export class EventRepository{

    async getEventById(id){
       const event = await poraque_event.findOne({_id:id})
       return event
    }

    async countEvents(){
        const numberEvents = await poraque_event.countDocuments();

        return numberEvents
    }

    async getListEventsByType(start, limit, type){
        const listEvents = await poraque_event.find({event_type:type}).select({event_description:0}).sort({_id:1}).skip(start).limit(limit)
        return listEvents
    }

    async searchEvents(pageNumber, ItemsPerPage, searchQuery, eventType){
        const listEvents = await poraque_event.find({event_title:{$regex:searchQuery}, event_type:{$regex:eventType}}).select({event_description:0}).sort({_id:1}).skip(pageNumber).limit(ItemsPerPage)

        return listEvents
    }

}