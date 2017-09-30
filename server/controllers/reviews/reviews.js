import models from '../../models';

const users = models.users;
const recipes = models.recipes;
const reviews = models.reviews;
const addReview = (req, res) => {
    const {userId, recipeId, review, upVote, downVote} = req.body;
    return reviews
    .create({
        userId: userId,
        recipeId: recipeId,
        review: review,
        upVote: upVote,
        downVote: downVote
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
