import express from 'express';
import logger from './utils/logger.js';
import { PORT } from './config/env.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Subsync!');
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
    logger.info(`Server is running on port http://localhost:${PORT}`);
})

export default app;