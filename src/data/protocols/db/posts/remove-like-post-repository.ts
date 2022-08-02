import { RemoveLike } from "@/domain"

export interface RemoveLikeRepository{
  removeLike: (likeId:RemoveLikeRepository.Params) => Promise<RemoveLikeRepository.Result>
}

export namespace RemoveLikeRepository{
  export type Params = RemoveLike.Params
  export type Result = RemoveLike.Result
}