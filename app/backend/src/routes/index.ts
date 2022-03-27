import { Router } from 'express';
import clubRouter from './club';
import matchRouter from './match';
import loginRouter from './login';
import leaderboardRouter from './leaderboard';

const router = Router();

router.use('/clubs', clubRouter);
router.use('/matchs', matchRouter);
router.use('/login', loginRouter);
router.use('/leaderboard', leaderboardRouter);

export default router;
