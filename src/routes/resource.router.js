import { Router } from "express";
import { ResourceModel } from "../models/resoruce.model.js";

export const resourceRouter = Router();

resourceRouter.get('/', async (req,res)=>{
    try {
        const resources = await ResourceModel.find()
        res.json(resources)
    } catch (error) {
        res.send(error)
    }
})