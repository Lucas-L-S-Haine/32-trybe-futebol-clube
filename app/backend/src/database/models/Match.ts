import { Model, DataTypes, Sequelize, Options } from 'sequelize';
import * as databaseOptions from '../config/database';

const databaseConfig = databaseOptions as unknown as Options;
const sequelize = new Sequelize(databaseConfig);

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
    modelName: 'Match',
    tableName: 'matchs',
    timestamps: false,
    underscored: true,
    sequelize,
  },
);

export default Match;
