import { AddComment } from "@/domain"

export interface AddCommentRepository{
  addComment: (comment:AddCommentRepository.Params) => Promise<AddCommentRepository.Result>
}

export namespace AddCommentRepository{
  export type Params = AddComment.Params
  export type Result = AddComment.Result
}