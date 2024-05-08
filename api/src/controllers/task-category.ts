import { Request, Response } from 'express';
import TaskCategory from '../models/task-category';

export const getTaskCategories = async (req: Request, res: Response) => {
  const listTaskCategories = await TaskCategory.findAll();
  res.json(listTaskCategories);
};

export const getTaskCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const taskCategory = await TaskCategory.findByPk(id);

  if (taskCategory) {
    res.json(taskCategory);
  } else {
    res.status(404).json({
      msg: `Task category with id ${id} not found`,
    });
  }
};

export const deleteTaskCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const taskCategory = await TaskCategory.findByPk(id);

  if (!taskCategory) {
    return res.status(404).json({
      msg: `Task category with id ${id} not found`,
    });
  } else {
    await taskCategory.destroy();
    res.json({
      msg: `Task category with id ${id} deleted`,
    });
  }
};

export const addTaskCategory = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    await TaskCategory.create(body);

    res.json({
      msg: 'Task category added successfully',
    });
  } catch (error) {
    console.log(error);
    res.json({
      msg: 'An error occurred while adding the task category',
    });
  }
};

export const updateTaskCategory = async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;

  const taskCategory = await TaskCategory.findByPk(id);

  if (!taskCategory) {
    return res.status(404).json({
      msg: `Task category with id ${id} not found`,
    });
  }

  await taskCategory.update(body);

  res.json({
    msg: `Task category with id ${id} updated`,
  });
};

