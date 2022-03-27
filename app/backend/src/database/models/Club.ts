import { Model, DataTypes, Sequelize, Options } from 'sequelize';
import * as databaseOptions from '../config/database';

const databaseConfig = databaseOptions as unknown as Options;
const sequelize = new Sequelize(databaseConfig);

class Club extends Model {
  id: number;

  clubName: string;
}

Club.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    clubName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName: 'Club',
    tableName: 'clubs',
    timestamps: false,
    underscored: true,
    sequelize,
  },
);

export default Club;
