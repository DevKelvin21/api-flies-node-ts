import express from "express";
import diaryRouter from "./routes/diaries";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/", (_req, res) => {
  res.send("Hello World! from Express with TypeScript");
});

app.get("/ping", (_req, res) => {
  console.log("someone pinged me " + new Date().toLocaleDateString());
  res.send("pong");
});

app.use("/api/diaries", diaryRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
