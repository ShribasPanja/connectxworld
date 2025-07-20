import express from "express";
import authRouter from "./routes/auth";

const app: express.Express = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", authRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

export default app;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
