import cors from 'cors';
import morgan from "morgan";
import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'; 
import tourRoute from './routes/tours.js'
import passport from 'passport';

dotenv.config();

const app = express();
app.use(passport.initialize());
// Middleware
app.use(helmet());
app.use(morgan('dev'))
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/tours', tourRoute);

export default app;