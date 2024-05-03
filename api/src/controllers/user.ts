import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/user";
import jwt from "jsonwebtoken";

interface IUser {
  id_user: number;
  usr_name: string;
  usr_email: string;
  usr_pass: string;
  id_usr_type: number;
}

export const newUser = async (req: Request, res: Response) => {
  const { usr_name, usr_email, usr_pass, id_usr_type } = req.body;

  //Validate if the user already exists
  const user = (await User.findOne({
    where: { usr_email: usr_email },
  })) as IUser | null;

  if (user) {
    return res.status(400).json({
      msg: `User ${usr_email} already exists!`,
    });
  }

  const hashedPassword = await bcrypt.hash(usr_pass, 10);

  try {
    User.create({
      usr_name: usr_name,
      usr_email: usr_email,
      usr_pass: hashedPassword,
      id_usr_type: id_usr_type,
    });

    res.json({
      msg: `User ${usr_name} created successfully!`,
    });
  } catch (error) {
    res.status(400).json({
      msg: "Error creating user",
      error,
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { usr_email, usr_pass } = req.body;

  //Validate if the user already exists
  const user = (await User.findOne({
    where: { usr_email: usr_email },
  })) as IUser | null;

  if (!user) {
    return res.status(400).json({
      msg: `User ${usr_email} not found!`,
    });
  }

  //Validate if the password is correct
  const validPassword = await bcrypt.compare(usr_pass, user.usr_pass);

  if (!validPassword) {
    return res.status(400).json({
      msg: "Invalid password",
    });
  }

  //Generate token
  const token = jwt.sign(
    {
      usr_email: usr_email,
    },
    process.env.SECRET_KEY || "secret",
    {
      expiresIn: "1800000", //30 minutes
    }
  );

  res.json(token);
};
