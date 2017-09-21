import models from '../../models';

const recipes = models.recipes;
const destroy = (req, res) => {
    return recipes
      .findById(req.params.Id)
      .then(recipes => {
          console.log(recipes);
        if (!recipes) {
          return res.status(400).send({
            message: 'Recipe Not Found',
          });
        } else {
        return recipes
          .destroy()
          .then(() => res.status(204).send({
              message: 'Recipe has been deleted'
          }))
          .catch(error => res.status(400).send(error));
        }
      })
    
      .catch(error => res.status(400).send(error));
  }
  export default destroy;