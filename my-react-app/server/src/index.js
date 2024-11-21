import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import routes from './routes/index.js';

const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/', routes);


app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
