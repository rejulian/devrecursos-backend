import { Router } from "express";

export const resourceRouter = Router();

resourceRouter.get('/', (req,res)=>{
    res.send('Todos los recursos')
})