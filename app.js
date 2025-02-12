import express from 'express';
import logger from './utils/logger.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Subsync!');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    logger.info('Server is running on port 3000');
})