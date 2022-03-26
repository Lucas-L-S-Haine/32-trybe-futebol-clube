import { RequestHandler } from 'express';
import * as service from '../services/match';

export const readAll: RequestHandler = (req, res, next) => service
  .readAll(req.query.inProgress as unknown as string | undefined)
  .then((matches) => res.status(200).json(matches))
  .catch(next);

export const createOne: RequestHandler = (req, res, next) => service
  .createOne(req.body)
  .then((match) => res.status(201).json(match))
  .catch(next);

export const finish: RequestHandler = (req, res, next) => service
  .finish(Number(req.params.id))
  .then(() => res.status(200).send({ message: 'OK' }))
  .catch(next);
