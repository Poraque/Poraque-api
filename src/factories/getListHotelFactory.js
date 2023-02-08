export const getHotelFactory = () =>{
    const eventRepository = new EventRepository()
    const getListHotelUseCase = new GetListHotelUseCase(eventRepository)
    const getListHotelController = new GetListHotelCrotroller(getListHotelUseCase)

    return getListHotelController
}