import { Sequelize, Options } from 'sequelize';
import * as databaseOptions from '../config/database';
import User from './User';
import Club from './Club';
import Match from './Match';

const databaseConfig = databaseOptions as unknown as Options;
const sequelize = new Sequelize(databaseConfig);

Club.hasMany(Match, { foreignKey: 'id', as: 'homeTeam' });
Club.hasMany(Match, { foreignKey: 'id', as: 'awayTeam' });
Match.belongsTo(Club, { foreignKey: 'homeTeam', as: 'homeClub' });
Match.belongsTo(Club, { foreignKey: 'awayTeam', as: 'awayClub' });

export {
  Sequelize,
  sequelize,
  User,
  Club,
  Match,
};
