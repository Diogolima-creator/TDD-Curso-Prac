import { PostModel } from "../models"

export interface GetPost {
  getAll?: () => Promise<GetPost.Result>
}

export namespace GetPost{
  export type Result = {
    posts: PostModel[]
    status: string
  }
}