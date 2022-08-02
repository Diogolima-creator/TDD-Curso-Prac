import { AddComment } from "@/domain/useCases/create-post"

export interface AddCommentRepository{
  add: (comment:AddCommentRepository.Params) => Promise<AddCommentRepository.Result>
}

export namespace AddCommentRepository{
  export type Params = AddComment.Params
  export type Result = AddComment.Result
}