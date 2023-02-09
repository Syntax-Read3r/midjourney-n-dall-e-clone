// This is a function that is going to create this application to mongoDB
import mongoose from 'mongoose';

const connectDB = (url) => {
//  call mongoose and call a .set function of mongoose to set the mongoose instance on the current thread
    mongoose.set('strictQuery', true);

    // connect the databsse
    mongoose.connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('error', err));
}

export default connectDB