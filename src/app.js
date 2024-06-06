import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(express.json({limit: '16kb', extended: true}));
app.use(express.urlencoded({limit: '16kb', extended: true}));
app.use(cookieParser());
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true
}));

// import routes
import userRouter from './routes/user.routes.js';

app.use('/api/v1/users', userRouter);


export {app}