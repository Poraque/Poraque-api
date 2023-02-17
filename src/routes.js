import { Router } from "express"
import { eventFactory } from "./factories/eventFactory.js"

const router = Router()

router.get('/',(req, res)=>{ 
    console.log(req)
    res.status(200).json({'message':'conectado'})})

router.get('/event', (req, res)=> 
    eventFactory().getAllEvents(req, res))


router.get('/event/search', (req, res)=>
    eventFactory().searchEvents(req, res))

router.get('/event/:id', (req, res)=> 
    eventFactory().getEventById(req, res))


export {router}

