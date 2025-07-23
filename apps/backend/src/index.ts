import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import authRouter from "./routes/auth";
import path from "path";

// Load environment variables from root directory
dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

const app: express.Express = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("ConnectX World Backend API");
});

// Mount auth routes with /api prefix
app.use("/api", authRouter);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

export default app;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
