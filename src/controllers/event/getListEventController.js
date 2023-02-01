export class GetHotelCrotroller{
    constructor(getHotelUseCase){
        this.getHotelUseCase = getHotelUseCase
    }

    async handle(req, res){
        const start = req.params.start
        const limit = req.params.limit

        const event = await this.getHotelUseCase.execute(start, limit)
        res.status(200).json(event)
    }
}