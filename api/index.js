import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userAuth from './routes/auth.route.js'
dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/auth', userAuth);

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("COnnect")
})
app.listen(3000, () => {
    console.log("Server is Started at 3000 port")
})