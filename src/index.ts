import express , { Express, Request, Response }  from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database';

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;
  connectDB.sync().then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}!`);
    });
  });