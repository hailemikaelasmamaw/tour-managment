

import express from 'express'
import { createTour, getAllTour, getSingleTour, deleteTour, updateTour ,getFeaturedTours} from '../controllers/tourController.js';

const router = express.Router()

// create new tour
router.post('/', createTour);


// update tour
router.put('/:id', updateTour);


// delete tour
router.delete('/:id', deleteTour);


// get single tour
router.post('/:id', getSingleTour);


// create new tour
router.post('/', getAllTour);

router.get('/getFeaturedTours',getFeaturedTours)


export default router;