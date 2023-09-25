import { app } from "./app";
import { sequelize } from "./database";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
