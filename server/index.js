import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config(); //this line allow me to pull environment variable from the dotenv file

// initialize express application
const app = express();
app.use(cors()); // make cors for express app or middle ware.
app.use(express.json({limit: '50mb'})); //use json format for every request.

// create route
app.get('/', async (req, res) => {
    res.send('hello Munya');
})




