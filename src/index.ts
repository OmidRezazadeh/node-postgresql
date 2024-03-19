// Importing Express using named import syntax
import express from 'express';
import * as dotenv from 'dotenv';
import connectDB from './config/database';
const app = express();
import { userRouter } from "./routes/user";
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/users",userRouter);
const port = process.env.PORT || 3000;

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}!`);
    });
      