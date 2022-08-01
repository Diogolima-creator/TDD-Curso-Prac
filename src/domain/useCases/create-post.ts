import { PostModel } from "../models"

export interface CreatePost {
  create?: (post:CreatePost.Params) => Promise<CreatePost.Result>
}

export namespace CreatePost{
  export type Params = PostModel
  export type Result = PostModel
}