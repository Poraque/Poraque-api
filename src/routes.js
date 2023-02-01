import { Router } from "express"

const router = Router()

router.get('/',(req, res)=>{ 
    console.log(req)
    res.status(200).json({'message':'conectado'})})

router.get('/event', (req, res)=>{ res.status(200).json({'message':'deu certo'})
})

router.get('/event/:start&:limit', (req, res)=>{
    console.log(req.params.limit)
    res.status(200).json({'message':`${req.params.start }, ${req.params.limit}`})
})

export {router}

