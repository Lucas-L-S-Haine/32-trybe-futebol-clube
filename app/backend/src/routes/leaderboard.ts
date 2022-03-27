import { Router } from 'express';
import { readHome, readAway } from '../controllers/leaderboard';

const leaderboardRouter = Router();

leaderboardRouter
  .route('/home')
  .get(readHome);

leaderboardRouter
  .route('/away')
  .get(readAway);

export default leaderboardRouter;
