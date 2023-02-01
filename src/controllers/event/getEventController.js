export class GetEventCrotroller{
    constructor(getEventUseCase){
        this.getEventUseCase = getEventUseCase
    }

    async handle(req, res){
        const id = req.params.id
        const event = await this.getEventUseCase.execute(id)
        res.status(200).json(event)
    }
}