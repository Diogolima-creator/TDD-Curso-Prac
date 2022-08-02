import { AddComment } from "@/domain";
import { AddCommentRepository } from "@/data/protocols";

export class DbAddCommentPost implements AddComment{
  constructor(private readonly addCommentRepository: AddCommentRepository){}

  async add(comment: AddComment.Params): Promise<AddCommentRepository.Result> {
   return this.addCommentRepository.addComment(comment)
  }
}