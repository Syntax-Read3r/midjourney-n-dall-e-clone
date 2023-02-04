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

// create a way to run the express app
const startServer = async () => {
    app.listen(8080, () => console.log('server has started on port 8080'));
}

startServer();


