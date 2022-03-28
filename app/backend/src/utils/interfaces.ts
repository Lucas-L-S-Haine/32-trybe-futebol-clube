import { Request } from 'express';

export interface IRequest extends Request {
  user?: string | object;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IScore {
  name: string | number;
  totalPoints: string | number;
  totalGames: string | number;
  totalVictories: string | number;
  totalDraws: string | number;
  totalLosses: string | number;
  goalsFavor: string | number;
  goalsOwn: string | number;
  goalsBalance: string | number;
  efficiency: string | number;
}
