import express from 'express';
import recipeController from '../controllers/recipes';

let router = express.Router();

router.post('/', recipeController.addRecipe);
router.delete('/:Id', recipeController.destroy);
router.put('/:id', recipeController.update);

export default router;