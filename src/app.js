import express from "express"
import cors from 'cors'
import { router } from "./routes.js"
import { dbConect } from "./database/dbConnect.js"
import * as dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(router)
dbConect(process.env.URL_DB)



export {app}