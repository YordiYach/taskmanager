import db from "../db/connection";
import { DataTypes } from "sequelize";

const Task = db.define(
  "tb_task",
  {
    id_task: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tsk_title: {
      type: DataTypes.STRING,
    },
    tsk_description: {
      type: DataTypes.STRING,
    },
    tsk_state: {
      type: DataTypes.STRING,
    },
    tsk_deadline: {
      type: DataTypes.DATE,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
  }
);

export default Task;
