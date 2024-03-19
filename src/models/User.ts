import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'users',
})
export default class User extends Model{
 
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true
  })
 declare id: number;


  @Column({
    allowNull: false,
    type: DataType.STRING // Add this line
  })
  declare name: string;



  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare password: string;

  @Column({
    type: DataType.ENUM("active", "inactive"),
    defaultValue: "active",
  })
  status!: "active" | "inactive";
}


