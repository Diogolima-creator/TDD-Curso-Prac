import { GetPost } from "@/domain"

export interface GetPostRepository{
  getAll:() => Promise<GetPostRepository.Result>
}

export namespace GetPostRepository{
  export type Result = GetPost.Result
}