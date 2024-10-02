import express from "express";
import cors from "cors";
import { config } from "dotenv";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userModel from "./models/userModel.js";
import userRouter from "./routes/userRouter.js";

// App Config
config({ path: "./config/.env" });
const app = express();
const port = process.env.PORT || 4000;
// console.log(process.env.MONGODB_URI);

connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => console.log("Server started on PORT: " + port));
