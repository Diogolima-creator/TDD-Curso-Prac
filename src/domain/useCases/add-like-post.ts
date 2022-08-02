import { LikeModel } from "../models"

export interface AddLike {
    add?: (likeId: LikeModel) => Promise<AddLike.Result>
}

export namespace AddLike{
    export type Params = LikeModel
    export type Result = Boolean
}