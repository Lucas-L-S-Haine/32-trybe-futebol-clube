import { Router } from 'express';
import { readAll, createOne } from '../controllers/match';
import { validateToken } from '../auth';

const matchRouter = Router();

matchRouter
  .route('/')
  .get(readAll)
  .post(validateToken, createOne);

export default matchRouter;
