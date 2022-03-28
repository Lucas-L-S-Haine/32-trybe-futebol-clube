import { readFileSync } from 'fs';
import { resolve } from 'path';
import { sequelize } from '../database/models';

const SQL_DIR = '../../queries';

const generalScore = readFileSync(resolve(__dirname, SQL_DIR, 'leaderboard.sql'), 'utf-8');
const homeScore = readFileSync(resolve(__dirname, SQL_DIR, 'home-leaderboard.sql'), 'utf-8');
const awayScore = readFileSync(resolve(__dirname, SQL_DIR, 'away-leaderboard.sql'), 'utf-8');

export const readAll = async () => {
  const [leaderboard] = await sequelize.query(generalScore);
  // const leaderboard = await sequelize.query(generalScore, { model: Score, mapToModel: true});
  return leaderboard;
};

export const readHome = async () => {
  const [leaderboard] = await sequelize.query(homeScore);
  return leaderboard;
};

export const readAway = async () => {
  const [leaderboard] = await sequelize.query(awayScore);
  return leaderboard;
};

/*
Classificação: Posição na classificação;
Time: Nome do time;
P: Total de Pontos;
J: Total de Jogos;
V: Total de Vitórias;
E: Total de Empates;
D: Total de Derrotas;
GP: Gols marcados a favor;
GC: Gols marcados contra;
SG: Saldo total de gols;
%: Aproveitamento do time.
*/

/*
name: 'Santos',
totalPoints: '9',
totalGames: '3',
totalVictories: '3',
totalDraws: '0',
totalLosses: '0',
goalsFavor: '9',
goalsOwn: '3',
goalsBalance: '6',
efficiency: '100'
*/
