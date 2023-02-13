import { Router } from "express"
import { getEventFactory } from "./factories/getEventFactory.js"
import { getAllEventFactory } from "./factories/getAllEventFactory.js"


const router = Router()

router.get('/',(req, res)=>{ 
    console.log(req)
    res.status(200).json({'message':'conectado'})})

router.get('/event/all', (req, res)=> 
    getAllEventFactory().handle(req, res))

router.get('/event/:id', (req, res)=> 
    getEventFactory().handle(req, res))

router.get('/event/:start&:limit', (req, res)=>{
    console.log(req.params.limit)
    res.status(200).json({'message':`${req.params.start }, ${req.params.limit}`})
})

router.get('/hotel/:start&:limit', (req, res)=>{
    console.log(req.params.limit)
    res.status(200).json({'message':`${req.params.start }, ${req.params.limit}`})
})

export {router}

