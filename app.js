import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import dbConnection from "./db/config";
import userRouting from "./routes/userRoutes";
import postsRouting from "./routes/postsRoutes";
import authRouting from "./routes/authRoutes";
import mediaRouting from "./routes/imageRoutes";
import DBAdapter from "./db/adapters/db_adapter";
import cookieParser from "cookie-parser";
import { version } from "./settings";

// Configure dotenv
dotenv.config();

// Creation Application
const app = express();
const port = process.env.PORT || 5000;

app.use(
    cors({
        credentials: true,
        // origin: [],
        origin: ["http://localhost:3000", "http://186.84.20.195"],
        allowedHeaders: ["Content-Type"],
        methods: ["GET", "PUT", "POST", "DELETE"],
    })
);

app.use(cookieParser());

app.use(express.json());

// Make media available
app.use("/uploads/images", express.static("uploads/images"));

// Establish db connection
dbConnection().then((_) => app.emit("ready"));
// TODO: REMEBER THAT THIS FUNCTION RETURN A PROMISE

// Sheared Intances
export const mongo = new DBAdapter();

// Routing

authRouting(app);
mediaRouting(app);
userRouting(app);
postsRouting(app);

app.get("/", (req, res) => {
    res.send({ status: "ok", version: `${version}` });
});

app.on("ready", () => {
    app.listen(port, (err) => {
        if (err) console.log(err);
        else console.log(`Server running on port http://localhost:${port}`);
    });
});
