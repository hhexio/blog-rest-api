import { Request, Response } from "express";

import { Posts } from "../mocks/posts";
import { Post } from "../schema/posts";

/**
 * GET /
 * Post page.
 */

export const getPosts = async (
  _req: Request,
  res: Response,
): Promise<Response<Post[]>> => {
  return res.json(Posts);
};
