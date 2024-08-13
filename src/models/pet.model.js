import { DataTypes } from 'sequelize';
import { database } from '../database/connection.db.js';

// database -> representa o nosso banco de dados
export const Pet = database.define('Pet',
  {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    breed: {
      type: DataTypes.STRING(150),
      allowNull: false,
    }
  }
);


