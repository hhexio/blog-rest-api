import express from "express";
import logger from "morgan";
import * as path from "path";

import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";

import { PORT } from "./common/constants";

// Routes
import { index } from "./routes/index";
import { posts } from "./routes/posts";
// Create Express server
export const app = express();

// Express configuration
app.set("port", process.env.PORT || PORT);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.use(logger("dev"));

app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));
app.use("/", index);
app.use(posts);

app.use(errorNotFoundHandler);
app.use(errorHandler);
