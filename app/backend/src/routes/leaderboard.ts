import { Router } from 'express';
import { readAll, readHome, readAway } from '../controllers/leaderboard';

const leaderboardRouter = Router();

leaderboardRouter
  .route('/')
  .get(readAll);

leaderboardRouter
  .route('/home')
  .get(readHome);

leaderboardRouter
  .route('/away')
  .get(readAway);

export default leaderboardRouter;
