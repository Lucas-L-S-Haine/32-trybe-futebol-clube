import { RequestHandler } from 'express';
import * as service from '../services/club';

export const readAll: RequestHandler = (req, res, next) => service
  .readAll()
  .then((clubs) => res.status(200).json(clubs))
  .catch(next);

export const readOne: RequestHandler = (req, res, next) => service
  .readOne(req.params.id)
  .then((club) => res.status(200).json(club))
  .catch(next);
