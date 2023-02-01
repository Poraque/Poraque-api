import { app } from "./app.js";
import request  from "supertest";

describe("Get event", ()=>{
    it("Deve ser possivel ler um evento", async ()=>{
       const response = await request(app).get('/event')
       expect(response.status).toBe(200)
    })
})