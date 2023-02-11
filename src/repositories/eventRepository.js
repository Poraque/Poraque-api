import {poraque_event} from '../models/poraqueEvent.js'

export class EventRepository{

    async getEvent(id){
       const event = await poraque_event.findOne({_id:id})
       return await event
    }

    async countEvent(){
        const numberEvents = await poraque_event.countDocuments();

        return numberEvents
    }

    async getListEventsByType(start, limit, type){
        const listEvents = poraque_event.find({event_type:`${type}`}).select({event_description:0}).sort({_id:1}).skip(start).limit(limit)
        return await listEvents
    }

}