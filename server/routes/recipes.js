import express from 'express';
import recipeController from '../controllers/recipes';

let router = express.Router();

router.post('/', recipeController.addRecipe);
router.delete('/:Id', recipeController.destroy);
router.put('/:Id', recipeController.update);
router.get('/', recipeController.getAll);
router.get('/?sort=upvote&order=desc', recipeController.getAll);
router.put('/:id/upVotes', recipeController.votes);


export default router;