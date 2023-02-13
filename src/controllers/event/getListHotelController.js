export class GetHotelCrotroller{
    constructor(getListHotelUseCase){
        this.getListHotelUseCase = getListHotelUseCase
    }

    async handle(req, res){
        const start = req.params.start
        const limit = req.params.limit
        const event = await this.getListHotelUseCase.execute(start, limit)
        res.status(200).json(event)
    }
}