import models from '../../models';

const users = models.users;
const recipes = models.recipes;
const reviews = models.reviews;
const addReview = (req, res) => {
    const {userId, reviews} = req.body;
    const recipeId = req.params.Id
    return reviews
    .create({
        userId: userId,
        reviews: reviews
    }).then(addReview => {
        res.status(201).send(addReview)
    })
    .catch(err => {
        console.log(err)
        res.status(500).send({
            message: 'Some error occured!'
        })
    })
}
export default addReview;
