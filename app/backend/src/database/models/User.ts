import { Model, Sequelize, DataTypes, Options } from 'sequelize';
import * as databaseOptions from '../config/database';

const databaseConfig = databaseOptions as unknown as Options;
const sequelize = new Sequelize(databaseConfig);

class User extends Model {
  id: number;

  username: string;

  role: string;

  email: string;

  password: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName: 'User',
    tableName: 'users',
    timestamps: false,
    underscored: true,
    sequelize,
  },
);

export default User;
