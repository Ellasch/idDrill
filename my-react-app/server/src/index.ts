import "reflect-metadata";
import cors from 'cors';
import express from 'express';
import indexRoute from './routes/index.ts';
import * as dotenv  from 'dotenv';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/', indexRoute);

const port = process.env.PORT;

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);