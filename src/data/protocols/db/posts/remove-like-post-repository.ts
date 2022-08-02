import { RemoveLike } from "@/domain/useCases/create-post"

export interface RemoveLikeRepository{
  remove: (likeId:RemoveLikeRepository.Params) => Promise<RemoveLikeRepository.Result>
}

export namespace RemoveLikeRepository{
  export type Params = RemoveLike.Params
  export type Result = RemoveLike.Result
}