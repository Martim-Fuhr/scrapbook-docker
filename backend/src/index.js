// import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/users';

const PORT = 3030;
const HOST = '0.0.0.0';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', userRoutes);

app.listen(PORT, HOST);
