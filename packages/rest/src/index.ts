import { Request, Response } from "express";

const express = require("express");
const app = express();
const port = 8080;

const cors = require("cors");

app.use(cors({ origin: true }));

app.get("/listPosts", (req: Request, res: Response) => {
  var posts = [
    {
      title: "Monorepo like a boss with cloud build.",
      description:
        "Automatically build and deploy from your monorepo with cloud build",
      date: new Date(),
    },
  ];

  res.send(JSON.stringify(posts));
});

app.get("/config", (req: Request, res: Response) => {
  res.send(
    JSON.stringify({
      env: process.env.ENV,
      fav_color: process.env.FAV_COLOR,
      fav_sport: process.env.FAV_SPORT,
    })
  );
});

app.post("/newPost", (req: Request, res: Response) => {});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
