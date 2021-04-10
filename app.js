import dotenv from "dotenv";
import express from "express";
import dbConnection from "./db/config";

// Configure dotenv
dotenv.config();

// Creation Application
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Establish db connection
dbConnection();

app.get("*", (req, res) => {
  res.send({ hello: "express" });
});

app.post("");

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`Server running on port http://localhost:${port}`);
});
