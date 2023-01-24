import { Router, Request, Response } from 'express';
import { createMovie } from './controllers/MovieController';
import { validate } from './middleware/HandleValidation';
import { movieCreateValidation } from './middleware/MovieValidation';

const router = Router();

export default router.get('/test', (req: Request, res: Response) => {
  res.status(200).send('API Working!');
}).post('/movie', movieCreateValidation(), validate, createMovie);
