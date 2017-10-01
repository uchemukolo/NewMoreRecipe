import models from '../../models';

const recipes = models.recipes;
const favourites = models.favourites;

const getFavourite = (req, res) => {
    return favourites
          .all()
          .then(getFavourite => {
            res.status(201).send(getFavourite)
            .catch(err => {
              console.log(err)
              res.status(500).send({
                  message: 'Some error occured!'
              })
          })
      })
    }
  export default getFavourite;