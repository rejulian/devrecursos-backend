import mongoose from "mongoose";

const ResourceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
    }
});

export const ResourceModel = mongoose.model('Resource', ResourceSchema)