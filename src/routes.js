import { Router } from "express"
import { eventFactory } from "./factories/eventFactory.js"
import multer from "multer";
const router = Router()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './src/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname)
  }
}) 
const upload = multer({
    storage:storage 
  })


router.get('/',(req, res)=>{ 
    console.log(req)
    res.status(200).json({'message':'conectado'})})

router.get('/event', (req, res)=> 
    eventFactory().getAllEvents(req, res))

router.get('/event/search', (req, res)=>
    eventFactory().searchEvents(req, res))

router.get('/event/:id', (req, res)=> 
    eventFactory().getEventById(req, res))

router.patch('/event/:id', upload.single('event_img'), (req, res)=>
      eventFactory().editEvent(req, res))

export {router}
