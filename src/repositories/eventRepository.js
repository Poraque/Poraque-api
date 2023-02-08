import {poraque_event} from '../models/poraqueEvent.js'

export class EventRepository{

    async getEvent(id){
       const event = await poraque_event.findOne({_id:id})
       

       return await event
    }

    async getAllEvent(){
        const allEvents = poraque_event.find()
 
        return await allEvents
    }

    async getListEvent(start, limit){
        const listEvent = poraque_event.find()
 
        return await listEvent
    }

    async getListHotel(start, limit){
        const listHotel = poraque_event.findMany({_id:id})
 
        return await listHotel
    }
}