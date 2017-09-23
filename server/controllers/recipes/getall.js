import models from '../../models';

const recipes = models.recipes;
const getAll = (req, res) => {
    return recipes
          .all()
          .then(getAll => {
            res.status(201).send(getAll)
          .catch(error => res.status(400).send(error));
      })
    }
  export default getAll;