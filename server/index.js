import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/posts.js';
import dalleRoutes from './routes/dallas.js';


dotenv.config(); //this line allow me to pull environment variable from the dotenv file

// initialize express application
const app = express();
app.use(cors()); // make cors for express app or middle ware.
app.use(express.json({limit: '50mb'})); //use json format for every request.

// NOTE: to use the routes in this app, one has to add the middleware.
app.use('/api/v1/posts', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);





// create route
app.get('/', async (req, res) => {
    res.send('hello Munya!!');
})

// create a way to run the express app
const startServer = async () => {

    // before app.listen, first connect to mongoDB which can fail (this can happen if the user haven't logged in) or other reasons for connection. So place this in a try block
    try {
        connectDB(process.env.MONGO_URL);
        
    app.listen(8080, () => console.log('server has started on port 8080'));
    } catch (error) {
        console.log(error);
    }

}

startServer();


