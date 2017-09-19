import express from 'express';
import userController from '../controllers/users';

let router = express.Router();

router.post('/signup', userController.Signup);

export default router;
