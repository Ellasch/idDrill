import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import indexRoute from './routes/index.ts';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', indexRoute);

const port = 3000;

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);