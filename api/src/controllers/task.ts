import { Request, Response } from "express";
import Task from "../models/task";

export const getTasks = async (req: Request, res: Response) => {
  const listTasks = await Task.findAll();
  res.json(listTasks);
};

export const getTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await Task.findByPk(id);

  if (task) {
    res.json(task);
  } else {
    res.status(404).json({
      msg: `Task with id ${id} not found`,
    });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await Task.findByPk(id);

  if (!task) {
    return res.status(404).json({
      msg: `Task with id ${id} not found`,
    });
  } else {
    await task.destroy();
    res.json({
      msg: `Task with id ${id} deleted`,
    });
  }
};

export const addTask = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    await Task.create(body);

    res.json({
      msg: "Task added successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      msg: "An error occurred while adding the task",
    });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;

  const task = await Task.findByPk(id);

  try {
    if (task) {
      await task.update(body);
      res.json({
        msg: "Task updated successfully",
      });
    } else {
      res.status(400).json({
        msg: "task not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      msg: "An error occurred while adding the task",
    });
  }
};
