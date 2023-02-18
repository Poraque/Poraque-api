import { isValidObjectId} from "mongoose"
import { isAlphanumeric } from 'validator';

export class EventController{
    constructor(EventUseCase){
        this.eventUseCase = EventUseCase
    }

    async getAllEvents(req, res){
        const event = await this.eventUseCase.getAllEvents()
        res.status(200).json(event)
        return;
    }

    async getEventById(req, res){
        const id = req.params.id
        if(isValidObjectId(id)){
            const event = await this.eventUseCase.getEventById(id)
            res.status(200).json(event)
            return;
        }else{
            res.status(400).json({"error":"id is not valid"})
            return;
        }
    }


    async searchEvents(req, res){
        if(Object.keys(req.query).length == 0){
            res.status(200).json({});
            return;
        }
        
        const search = req.query.q
        const page = req.query.page ? Number(req.query.page) : 0
        const pageSize = req.query.pageSize ? Number(req.query.pageSize) : 10
        const type = req.query.type
        
        if(type && !isAlphanumeric(type) || search && !isAlphanumeric(search)){
            res.status(404).json({"error":"Not found"})
            return;
        }
        
        if(isNaN(page) || isNaN(pageSize) ){
            res.status(400).json({"error":"invalid request"})
            return;
        }
        
        try{
            const event = await this.eventUseCase.searchEvents(page, pageSize, search, type);
            res.status(200).json(event)
        } catch(err){
            res.status(400).json({"error":err})
        }
    }

}