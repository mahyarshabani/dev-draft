// File: src/index.js
import express from 'express';
import { Request, Response } from 'express';

const app = express();
app.use(express.json());

app.post('/start', (req: Request, res: Response): void => {
    res.status(200).json({
        message: 'Received request to start the server',
        data: req.body
    });
});

export default app;