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
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'clubs',
        key: 'id',
      },
    },
    homeTeamGoals: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    awayTeam: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'clubs',
        key: 'id',
      },
    },
    awayTeamGoals: {
      type: DataTypes.STRING,
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

Club.hasMany(Match, { foreignKey: 'homeTeam', as: 'hometeam' });
Club.hasMany(Match, { foreignKey: 'awayTeam', as: 'awayteam' });
Match.belongsTo(Club, { foreignKey: 'homeTeam', as: 'homeTeamName' });
Match.belongsTo(Club, { foreignKey: 'awayTeam', as: 'awayTeamName' });

export default Match;
