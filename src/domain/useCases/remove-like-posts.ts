import { LikeModel } from "../models"

export interface RemoveLike {
    remove?: (likeId: LikeModel) => Promise<RemoveLike.Result>
}

export namespace RemoveLike{
    export type Params = LikeModel
    export type Result = Boolean
}