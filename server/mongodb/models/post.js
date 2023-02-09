// This is creating a new model of our post, or a structure of how the model is going to look like.

import mongoose from 'mongoose';

const Post = new  mongoose.Schema({
    name: {type: String, required: true},
    prompt: {type: String, required: true},
    photo: {type: String, required: true},

});


const PostSchema = mongoose.model('Post', Post); //The second arg is the schema that was created above

export default PostSchema;