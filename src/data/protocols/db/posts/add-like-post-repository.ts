import { AddLike } from "@/domain"

export interface AddLikeRepository{
  addLike: (likeId:AddLikeRepository.Params) => Promise<AddLikeRepository.Result>
}

export namespace AddLikeRepository{
  export type Params = AddLike.Params
  export type Result = AddLike.Result
}