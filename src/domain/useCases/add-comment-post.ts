import { CommentModel, PostModel } from "../models"

export interface AddComment {
    add?: (comment: CommentModel) => Promise<AddComment.Result>
}

export namespace AddComment{
    export type Params = CommentModel
    export type Result = {post:PostModel}
}