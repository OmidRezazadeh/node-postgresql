import User  from "../models/User";
import { Sequelize } from "sequelize-typescript";
class connectDB {
  public sequelize: Sequelize | undefined;

  constructor() {
    this.ConnectDB();
  }
  private async ConnectDB() {
    this.sequelize = new Sequelize({
      database: "blog",
      username: "postgres",
      password: "admin",
      host: "localhost",
      dialect: "postgres",
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
      models: [User],
    });
    await this.sequelize
      .authenticate()
      .then(() => {
        console.log("Connection has been established successfully.");
      })
      .catch((err) => {
        console.error("Unable to connect to the Database:", err);
      });
  }
}

export default connectDB;
