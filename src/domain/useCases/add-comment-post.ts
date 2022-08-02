import { CommentModel } from "../models"

export interface AddComment {
    add?: (comment: CommentModel) => Promise<void>
}

export namespace AddComment{
    export type Params = CommentModel
}