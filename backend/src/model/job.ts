import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database";

class Job extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public company!: string;
  public location!: string;
  public salary!: number;
  public postedBy!: string;
}

Job.init(
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
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    postedBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Job",
    tableName: "Job",
  }
);

export { Job };
