import { Sequelize } from "sequelize";
const connectDB = new Sequelize({
    database:'postgres',
    username: 'postgres',
    password:'admin',
    host: 'localhost',
    dialect: 'postgres',
});
export default connectDB ;