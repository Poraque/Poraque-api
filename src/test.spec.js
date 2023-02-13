import { app } from "./app.js";
import request  from "supertest";

describe("Get event", ()=>{
    it("Deve ser possivel ler um evento", async ()=>{
        const response = await request(app).get('/event/all')
        expect(response.status).toBe(200)
        expect(response.body[0]).toHaveProperty('_id')
    })
})