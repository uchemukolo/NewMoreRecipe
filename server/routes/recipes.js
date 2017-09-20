import express from 'express';
import recipeController from '../controllers/recipes';

let router = express.Router();

router.post('/addrecipe', recipeController.addRecipe);
//router.post('/signin', recipeController.modifyrecipe);

export default router;
