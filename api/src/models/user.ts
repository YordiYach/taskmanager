import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

const User = sequelize.define(
  "tb_user",
  {
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    usr_name: {
      type: DataTypes.STRING,
    },
    usr_email: {
      type: DataTypes.STRING,
    },
    usr_pass: {
      type: DataTypes.STRING,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
  }
);

export default User;
