import models from '../../models';

const recipes = models.recipes;

const votes = (req, res) => {
  return recipes
    .findOne({
      where: {
        id: req.params.id
      }       
    }).then(votes => {
      console.log(votes.upVote)
        if (votes) {
          recipes.update({
            upVote: (votes.upVote + 1)
          },
          {
            fields: ['upVote'],
            where: {
              id: req.params.id
            }
          }
        ).then(voted =>{
              return res.status(200).send({
                message: 'Voted'
              })
            })
        } else {
          res.status(400).send({
            message: 'does NOT exist!'
          })
        }
    }).catch(err => {
        console.log(err)
        res.status(500).send({
          message: 'Some error occured!'
        })
    })
}
    export default votes;
