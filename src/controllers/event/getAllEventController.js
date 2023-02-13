export class GetAllEventCrotroller{
    constructor(getEventUseCase){
        this.getAllEventUseCase = getEventUseCase
    }

    async handle(req, res){
        const event = await this.getAllEventUseCase.execute()
        res.status(200).json(event)
    }
}