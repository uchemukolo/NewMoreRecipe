import models from '../../models';

const recipes = models.recipes;
const getAll = (req, res) => {
  if (req.query && req.query.sort) {
    return recipes
      .findAll({
        order: [
          ['upVote', 'DESC']
        ]
      })
      .then(upVotes => {
        if (upVotes) {
          res.status(201).send(upVotes)
        } else {
          return res.status(404).send({
            message: 'Not found!'
          })
        }  
      })
      .catch(err => {
          console.log(err)
          res.status(500).send({
              message: 'Some error occured!'
          })
      })
  } else {
    return recipes
          .all()
          .then(getAll => {
            res.status(200).send(getAll)
          .catch(error => res.status(400).send(error));
      })
    }
  }
  export default getAll;

  // const upVotes = (req, res) => {
//    
// }
// export default upVotes;