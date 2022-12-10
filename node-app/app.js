import express from "express";
import "./utils/database";
import routes from "./src/routes/routes";

const app = express();

app.use(express.json());
app.use("/", routes);
app.listen(3001, () => {
  console.log("listening on port 3001");
});
