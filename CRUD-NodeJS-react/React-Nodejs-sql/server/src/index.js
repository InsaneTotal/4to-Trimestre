import express from "express";
import cors from "cors";
import morgan from "morgan";
import jwt from "jsonwebtoken";
import personas from "./routes/personas.routes.js";
import dotenv from "dotenv";
dotenv.config();
//Initialization
const app = express();

//Settings
app.use(cors());
app.set("port", process.env.PORT || 3002);

// Middleware

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.get();
app.use("/api", personas);

app.listen(app.get("port"), () => {
  console.log("Server running on port", app.get("port"));
});
