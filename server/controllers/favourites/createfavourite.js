import models from '../../models';

const users = models.users;
const recipes = models.recipes;
const favourites = models.favourites;
const addFavourite = (req, res) => {
    const {userId, recipeId} = req.body;
    return favourites
    .create({
        userId: userId,
        recipeId: recipeId
       
    }).then(addFavourite => {
        res.status(201).send(addFavourite)
        .catch(err => {
        console.log(err)
        res.status(500).send({
            message: 'Some error occured!'
        })
    })
    
    })
}
export default addFavourite;