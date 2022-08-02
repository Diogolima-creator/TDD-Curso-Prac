import { AddLike } from "@/domain/useCases/create-post"

export interface AddLikeRepository{
  add: (likeId:AddLikeRepository.Params) => Promise<AddLikeRepository.Result>
}

export namespace AddLikeRepository{
  export type Params = AddLike.Params
  export type Result = AddLike.Result
}