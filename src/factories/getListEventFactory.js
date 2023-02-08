export const getHotelFactory = () =>{
    const eventRepository = new EventRepository()
    const getListEvenUseCase = new GetListEventUseCase(eventRepository)
    const getListEventController = new GetListEventCrotroller(getListEvenUseCase)

    return getListEventController
}