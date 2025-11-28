import express from 'express'
import dotenv from 'dotenv'
import dbConnect from './config/db.js';

dotenv.config()

const app = express();
dbConnect();

app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`)
})

