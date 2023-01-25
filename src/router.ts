import { Router, Request, Response } from 'express';
import { createMovie, deleteById, findMovieById, getAllMovies, updateMovie } from './controllers/MovieController';
import { validate } from './middleware/HandleValidation';
import { movieCreateValidation } from './middleware/MovieValidation';

const router = Router();

export default router.get('/test', (req: Request, res: Response) => {
  res.status(200).send('API Working!');
})
.post('/movie', movieCreateValidation(), validate, createMovie)
.get('/movie/:id', findMovieById)
.get('/movie', getAllMovies)
.delete('/movie/:id', deleteById)
.patch('/movie/:id', movieCreateValidation(), validate, updateMovie);
