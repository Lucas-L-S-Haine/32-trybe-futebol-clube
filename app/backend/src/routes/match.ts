import { Router } from 'express';
import { readAll, createOne, finish } from '../controllers/match';
import { validateToken } from '../auth';

const matchRouter = Router();

matchRouter
  .route('/')
  .get(readAll)
  .post(validateToken, createOne);

matchRouter
  .route('/:id/finish')
  .patch(finish);

export default matchRouter;
