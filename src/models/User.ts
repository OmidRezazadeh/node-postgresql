import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
  } from "sequelize-typescript";
  
  @Table({
    timestamps: true,
    tableName: "users",
    modelName: "User",
  })
  class User extends Model {
    
     @Column({
      primaryKey:true,  
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
    }) id: string;
  
    @Column({
      type: DataType.STRING,
      allowNull: false,
    })
    name: string;
  
    @Column({
      type: DataType.STRING,
      allowNull: false,
      unique: true,
    })
    email: string;
  
    @Column({
      type: DataType.STRING,
      allowNull: false,
    })
    password: string;
  
    @Column({
      type: DataType.ENUM('active', 'inactive'),
      defaultValue: 'active',
    })
    status: 'active' | 'inactive';
  }
  
  export default User;
  