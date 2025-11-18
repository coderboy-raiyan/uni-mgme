import cookieParse from 'cookie-parser';
import cors from 'cors';
import express, { Request, Response } from 'express';
import router from './router';
const app = express();

app.use(express.json());
app.use(cookieParse());
app.use(cors({ origin: '*', credentials: true }));

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: 'Server is healthy!',
    });
});

app.use('/api/v1', router);

export default app;
