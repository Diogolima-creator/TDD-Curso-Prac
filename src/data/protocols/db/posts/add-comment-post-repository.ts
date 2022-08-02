import { AddComment } from "@/domain"

export interface AddCommentRepository{
  addComment: (comment:AddCommentRepository.Params) => Promise<void>
}

export namespace AddCommentRepository{
  export type Params = AddComment.Params
}