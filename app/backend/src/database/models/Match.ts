import { Model, DataTypes, Sequelize, Options } from 'sequelize';
import * as databaseOptions from '../config/database';
import Club from './Club';

const databaseConfig = databaseOptions as unknown as Options;
const db = new Sequelize(databaseConfig);

class Match extends Model {
  id: number;

  homeTeam: number;

  homeTeamGoals: number;

  awayTeam: number;

  awayTeamGoals: number;

  inProgress: boolean;
}

Match.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    homeTeam: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'clubs',
        key: 'id',
      },
    },
    homeTeamGoals: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    awayTeam: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'clubs',
        key: 'id',
      },
    },
    awayTeamGoals: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    inProgress: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: 'matchs',
    timestamps: false,
    sequelize: db,
    modelName: 'Match',
    underscored: true,
  },
);

Club.hasMany(Match, { foreignKey: 'id', as: 'homeTeam' });
Club.hasMany(Match, { foreignKey: 'id', as: 'awayTeam' });
Match.belongsTo(Club, { foreignKey: 'homeTeam', as: 'homeClub' });
Match.belongsTo(Club, { foreignKey: 'awayTeam', as: 'awayClub' });

export default Match;
