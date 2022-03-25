import { Router } from 'express';
import { readAll, readOne } from '../controllers/club';

const clubRouter = Router();

clubRouter.get('/', readAll);

clubRouter.get('/:id', readOne);

export default clubRouter;
