import express from "express";
import {UserController} from "../controllers/UserController";
export const userRouter = express.Router();

userRouter.post('/register', UserController.register);