import models from '../../models';

const recipes = models.recipes;
const addRecipe = (req, res) => {
    const {userId, recipeName, description, mealType, dishType, ingredients, preparation} = req.body;
    if (!userId) {
        res.status(400).send({
            message: 'Field Cannot Be Empty!'
        })
    } else if(!recipeName) {
        res.status(400).send({
            message: 'Field Cannot Be Empty!'
        })
    } else if(!description) {
        res.status(400).send({
            message: 'Please Enter Description'
        })
    } else if(!mealType) {
        res.status(400).send({
            message: 'Please Choose a Meal Type'
        })
    } else if(!dishType) {
        res.status(400).send({
            message: 'Please Choose a Dish Type'
        })
    } else if(!ingredients) {
        res.status(400).send({
            message: 'Please Add Ingredients'
        })
    } else if(!preparation) {
        res.status(400).send({
            message: 'Please Add Preparations'
        })
    }  else {
            return recipes
            .create({
                userId: userId,
                recipeName: recipeName,
                description: description,
                mealType: mealType,
                dishType: dishType,
                ingredients: ingredients,
                preparation: preparation
            }).then(addRecipe => {
                res.status(201).send(addRecipe)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send({
                    message: 'some error occured!'
                })
            })
    }
}

export default addRecipe;