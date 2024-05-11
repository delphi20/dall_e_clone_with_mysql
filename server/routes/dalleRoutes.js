import express from 'express';

import * as dotenv from 'dotenv';
import cors from 'cors';

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY // This is also the default, can be omitted
});


dotenv.config();

const router = express.Router();



router.route('/').get((req,res) => {
    res.send('pee pee poo poo');
})

router.route('/').post(async (req,res) => {
    try {
        const { prompt } = req.body;

        const aiResponse = await openai.createImage({
            prompt,
            n: 1,
            size : '1024x1024',
            response_format: 'b64_json'
        });

        const image = aiResponse.data.data[0].b64_json;

        res.status(200).json({ photo: image });
    } catch (error) {
        console.log(error);
        res.send(500).send(error?.response.data.error.message)
    }
})

export default router;
