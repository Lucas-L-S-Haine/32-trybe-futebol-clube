import { readFileSync } from 'fs';
import { resolve } from 'path';
import { sequelize } from '../database/models';
import { IScore } from '../utils/interfaces';

const SQL_DIR = '../../queries';

const generalScore = readFileSync(resolve(__dirname, SQL_DIR, 'leaderboard.sql'), 'utf-8');
const homeScore = readFileSync(resolve(__dirname, SQL_DIR, 'home-leaderboard.sql'), 'utf-8');
const awayScore = readFileSync(resolve(__dirname, SQL_DIR, 'away-leaderboard.sql'), 'utf-8');

export const readAll = async () => {
  const [score] = await sequelize.query(generalScore);
  const leaderboard = score as IScore[];
  return leaderboard.map((team) => ({
    ...team,
    efficiency: Number(team.efficiency),
  }));
};

export const readHome = async () => {
  const [score] = await sequelize.query(homeScore);
  const leaderboard = score as IScore[];
  return leaderboard.map((team) => ({
    ...team,
    efficiency: Number(team.efficiency),
  }));
};

export const readAway = async () => {
  const [score] = await sequelize.query(awayScore);
  const leaderboard = score as IScore[];
  return leaderboard.map((team) => ({
    ...team,
    efficiency: Number(team.efficiency),
  }));
};
