import express from 'express';
import userRouter from './user.js';
const router = express.Router();
userRouter.post('/user', userRouter);
export default router;