import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
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
            const anyQueryRegex = search ? new RegExp(`.*${search}.*`, 'i'): null;
            const eventTypeSearch = eventType ? eventType : null;
            const page = Math.max(0, pageNumber) * itemsPerPage;
            let limit = Math.max(itemsPerPage, 1)

            limit =  Math.min(page + limit, MAX_ITEMS_PER_PAGE)
            
            if(anyQueryRegex){
                const searchResult = this.eventRepository.searchEvents(page, limit, anyQueryRegex)

                return searchResult
            }
            if(eventTypeSearch){
                const listByType = await this.eventRepository.getListEventsByType(page, limit, eventTypeSearch);

                return listByType;
            }
        }catch(err){
            console.log(err)
            return {'method':'searchEvent',
                    'error': err}
        }
    }

    async getEventById(id){
        try{
            let event = this.eventRepository.getEventById(id)

            return event
             }catch(err){
                 return {'method':'get event',
                         'error': err}
             }
    }

    async editEvent(id, img){
        if(img){
            const imgPath = path.resolve(img.destination, img.filename)
            
            const readImage = fs.createReadStream(imgPath);
            const resizeImage = sharp()
            .resize({ width: 320 })
            .jpeg();

            const buffer = await readImage.pipe(resizeImage).toBuffer();  
            fs.unlink(imgPath, (err) => {
                if (err) {
                  console.error(err);
                  return;
                }
              });

            const image = {
                data: buffer,
                type: img.mimetype
            }

            try{
                const editedEvent = await this.eventRepository.editEvent(id, image)
                return editedEvent;
            }
            catch(err){
                return {'method':'edit event',
                            'error': err}
            }
        }
    }
}