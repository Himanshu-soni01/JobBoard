import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database";
import { AutoIncrement } from "sequelize-typescript";

class AppliedJob extends Model {
  public id!: number;
  public job_id!: number;
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
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    appliedBy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "AppliedJob",
    tableName: "AppliedJob",
  }
);

export { AppliedJob };
