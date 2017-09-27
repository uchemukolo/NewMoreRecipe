import express from 'express';
import userController from '../controllers/users';
import recipeController from '../controllers/recipes';
import reviewController from '../controllers/reviews';

let router = express.Router();

router.post('/:id/reviews', reviewController.addReview);


export default router;
