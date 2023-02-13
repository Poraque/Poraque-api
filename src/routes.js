import { Router } from "express"
import { getEventFactory } from "./factories/getEventFactory.js"
import { getAllEventFactory } from "./factories/getAllEventFactory.js"
import { getEventListFilteredFactory } from "./factories/getEventListFilteredFactory.js"

const router = Router()

router.get('/',(req, res)=>{ 
    console.log(req)
    res.status(200).json({'message':'conectado'})})

router.get('/event/all', (req, res)=> 
    getAllEventFactory().handle(req, res))

router.get('/event/id=:id', (req, res)=> 
    getEventFactory().handle(req, res))

router.get('/event/filter=', (req, res)=>{
    getEventListFilteredFactory().handle(req, res)
})

export {router}

