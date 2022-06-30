import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (__, res) => {
    res.send('Back-end is running...');
});

export { app };