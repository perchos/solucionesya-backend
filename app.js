import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import dbConnection from "./db/config";
import authRouting from "./routes/authRoutes";
import mediaRouting from "./routes/mediaRoutes";

// Configure dotenv
dotenv.config();

// Creation Application
const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    credentials: true,
    // origin: [],
    origin: "*",
    allowedHeaders: ["Content-Type"],
    methods: ["GET", "PUT", "POST", "DELETE"],
  })
);

app.use(express.json());

// Make media available
app.use("/uploads/images", express.static("uploads/images"));

// Establish db connection
dbConnection();

// Routing

authRouting(app);
mediaRouting(app);

app.get("/", (req, res) => {
  res.send({ status: "ok" });
});

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`Server running on port http://localhost:${port}`);
});
