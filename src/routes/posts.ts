import { Router } from "express";
import * as controller from "../controllers/posts";

export const posts = Router();

posts.get("/posts", controller.getPosts);
