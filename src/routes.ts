import { Router } from "express";

const router = Router()

router.get('/',(request, response)=>{
    return response.status(200).send({"working":true})
})

router.post('/users',(request, response)=>{
    return response.status(201).send();
})

export {router}