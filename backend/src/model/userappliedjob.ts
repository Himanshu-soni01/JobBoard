import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database";

class AppliedJob extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public company!: string;
  public location!: string;
  public salary!: number;
  public appliedBy!: string;
}

AppliedJob.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    location: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    appliedBy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
  }
);

export { AppliedJob };
