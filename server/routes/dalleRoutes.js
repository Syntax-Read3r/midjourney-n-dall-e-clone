import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
    res.send('Hello from DALL-E')
});

router.router('/').post(async(req,res) => {
    try {
        const {prompt} = req.body; //The will come from the frontend side

        const aiResponse = await openai.createImage({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format:'b64_json',
        })

        const image = aiResponse.data.data[0].b64_json;

        res.status(200).json({photo: image});
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error?.response.data.error.message || error);

    }
})

export default router;

