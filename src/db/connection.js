import mongoose from "mongoose";
import 'dotenv/config'

export const connection = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log('Connected to MongoDB'))
    .catch(err=>console.log('Error connecting to MongoDB', err))
}