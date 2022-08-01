import { CreatePost } from "@/domain/useCases/create-post"

export interface CreatePostRepository{
  add: (post:CreatePostRepository.Params) => Promise<CreatePostRepository.Result>
}

export namespace CreatePostRepository{
  export type Params = CreatePost.Params
  export type Result = CreatePost.Result
}