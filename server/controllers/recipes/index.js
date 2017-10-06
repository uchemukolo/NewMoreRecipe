import addRecipe from './addrecipe.js'; 
import update from './update.js';
import destroy from './delete.js';
import getAll from './getall.js'; 
import votes from './upvote.js'; 

const recipeController = {
    addRecipe,
    destroy,
    update,
    getAll,
    votes
}

export default recipeController;