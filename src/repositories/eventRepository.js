import {poraque_event} from '../models/poraqueEvent.js'

export class EventRepository{

    async getEventById(id){
       let event = await poraque_event.findOne({_id:id})
       console.log(event.event_img.data)

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

    async searchEvents(pageNumber, ItemsPerPage, anySearchQuery){
        
        const listEvents = await poraque_event
        .find({
          
                event_title:{$regex:anySearchQuery}
              
            })
            .select({event_description:0})
            .sort({event_title: 1})
            .skip(pageNumber)
            .limit(ItemsPerPage)
        

        return listEvents
    }

    async editEvent(id, image){
        const result = await poraque_event.updateOne(
            { _id: id },
            { $set: { event_img: image } }
          );
        return result;
    }
}