import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connnectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import pollinationsRoutes from './routes/pollinationsRoutes.js'; // Ensure this path is correct and the file exists

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb'}));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', pollinationsRoutes);

app.get('/', async (req, res) => {
  res.send('Hello Future Architect!');
});

const startServer = async () => {
    try {
        connnectDB(process.env.MONGODB_URL);
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on http://localhost:${process.env.PORT}`);
        });
    } catch (error) {
        console.log(error);
    }   
}

startServer();
