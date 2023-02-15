import { isValidObjectId} from "mongoose"

export class GetEventCrotroller{
    constructor(getEventUseCase){
        this.getEventUseCase = getEventUseCase
    }

    async handle(req, res){
        const id = req.params.id
        if(isValidObjectId(id)){
            const event = await this.getEventUseCase.execute(id)
            res.status(200).json(event)
        }else{
            res.status(400).json({"error":"id is not valid"})
        }
    }
}