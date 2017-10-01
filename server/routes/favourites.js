import express from 'express';
import favouriteController from '../controllers/favourites';

let router = express.Router();

router.post('/:Id/recipes', favouriteController.addFavourite);
router.get('/:Id/recipes', favouriteController.getFavourite);



export default router;