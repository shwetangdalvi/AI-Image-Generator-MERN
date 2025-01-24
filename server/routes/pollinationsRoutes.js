import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const router = express.Router();


router.route('/').get( (req, res) => {
  res.send('Hello from pollinations Routes!');
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt, model, width, height } = req.body;
    const formattedPrompt = encodeURIComponent(prompt);
    const url = `${process.env.POLLINATION_URL}/prompt/${formattedPrompt}?model=${model}&width=${width}&height=${height}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const buffer = await response.arrayBuffer();
    const base64Image = Buffer.from(buffer).toString('base64');
    res.status(200).json({ photo: base64Image });
  } catch (error) {
    res.status(500).send(error?.response.data.error.message);
  }
});

export default router;
