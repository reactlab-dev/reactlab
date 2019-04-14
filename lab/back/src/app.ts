import bodyParser from "body-parser";
import express from "express";
import { getList, getByName, getListByFilter } from "./experience";

const app: express.Application = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

app.get("/list/experience", (req, res) => {
  const response = getList();
  res.send({ response });
});

app.get("/experience/:name", (req, res) => {
  const response = getByName(req);
  res.send({ response });
});

app.get("/list/experience/:filter", (req, res) => {
  const response = getListByFilter(req);
  res.send({ response });
});

const port: number = Number(process.env.PORT) || 3001;
app.listen(port, (err: Error) => {
  console.info("listening on: " + port);
  if (err) {
    console.error(err);
  } else {
    console.info("NODE_ENV =", process.env.NODE_ENV);
  }
});
