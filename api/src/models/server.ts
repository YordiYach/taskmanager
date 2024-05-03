import express, { Application, Request, Response } from "express";
import routesTask from "../routes/task";
import routesUser from "../routes/user";
import db from "../db/connection";
import Task from "./task";
import User from "./user";
import UserType from "./userType";

class Server {
  private app: express.Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3001";
    this.listen();
    this.middlewares();
    this.routes();
    this.dbConnect();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Application is running on port ${this.port}`);
    });
  }

  routes() {
    this.app.get("/", (req: Request, res: Response) => {
      res.json({
        msg: "API WORKING",
      });
    });
    this.app.use("/api/tasks", routesTask);
    this.app.use("/api/users", routesUser);
  }

  middlewares() {
    this.app.use(express.json());
  }

  async dbConnect() {
    try {
      await db.authenticate();
      console.log("Database connected!");
      await Task.sync();
      await User.sync();
      await UserType.sync();
    } catch (error) {
      console.log(error);
      console.log("Error connecting to the database!");
    }
  }
}

export default Server;
