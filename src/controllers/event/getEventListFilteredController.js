export class GetEventListFilteredCrotroller{
    constructor(getEventListFilteredUseCase){
        this.getEventListFilteredUseCase = getEventListFilteredUseCase
    }

    async handle(req, res){
        const filter = req.query
        if(Object.keys(filter).length == 0){
            res.status(200).json({})
        }
        try{
            const start = filter.start ? Number(filter.start) : null
            const category = filter.category ? filter.category : null
            const stars = filter.stars ? parseFloat(filter.stars) : null
                

            if(isNaN(start) || isNaN(stars) ){
                res.status(400).json({"error":"invalid request"})
            }


            const event = await this.getEventListFilteredUseCase.execute(start, category, stars)
            res.status(200).json(event)
        } catch(err){
            res.status(400).json({"error":err})
        }
    }
}