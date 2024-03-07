import express from 'express';
import cors from 'cors';
import { connection } from './db/connection.js';
import { resourceRouter } from './routes/resource.router.js';

const app = express();

app.use(express.json())
app.use(cors())

app.use('/api/resources', resourceRouter)

app.listen(8080, ()=>{
    console.log('Server running on port 8080');
    connection()
})