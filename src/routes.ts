import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";

const router = Router()

router.get('/',(request, response)=>{
    return response.status(200).send({"working":true})
})

router.post('/users',(request, response)=>{
    return createUserController.handle(request,response)
})

export {router}