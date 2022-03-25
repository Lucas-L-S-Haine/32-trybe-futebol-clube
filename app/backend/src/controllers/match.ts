import { RequestHandler } from 'express';
import * as service from '../services/match';

export const readAll: RequestHandler = (req, res, next) => service
  .readAll(req.query.inProgress as unknown as string | undefined)
  .then((matches) => res.status(200).json(matches))
  .catch(next);

export default readAll;
