import { Router } from 'express';
import { readAll } from '../controllers/match';

const matchRouter = Router();

matchRouter.get('/', readAll);

export default matchRouter;
