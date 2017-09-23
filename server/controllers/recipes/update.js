import models from '../../models';

const recipes = models.recipes;
const update = (req, res) => {
  return recipes
    .findById(req.params.id)
    .then(recipes => {
        console.log(recipes)
      if (!recipes) {
        return res.status(404).send({
          message: 'Recipe Not Found',
        });
      } else {
          return recipes
        .update({ 
                recipeName: req.body.recipeName || recipes.recipeName,
                description: req.body.description || recipes.description,
                mealType: req.body.mealType || recipes.mealType,
                dishType: req.body.dishType || recipes.dishType,
                ingredients: req.body.ingredients || recipes.ingredients,
                preparation: req.body.preparation || recipes.preparation,
          }
      )
        .then(updated => { res.status(200).send(updated) } )  // Send back the updated recipe.
        .catch((error) => {
            res.status(400).send(error)});
    }
    })
    .catch((error) => {
        res.status(400).send(error)});
    
}
export default update;