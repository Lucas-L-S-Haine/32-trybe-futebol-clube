import { RequestHandler } from 'express';
import * as service from '../services/leaderboard';

export const readHome: RequestHandler = (req, res, next) => service
  .readHome()
  .then((leaderboard) => res.status(200).json(leaderboard))
  .catch(next);

export const readAway: RequestHandler = (req, res, next) => service
  .readAway()
  .then((leaderboard) => res.status(200).json(leaderboard))
  .catch(next);
