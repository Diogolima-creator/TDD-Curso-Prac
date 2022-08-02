import { AddComment } from "@/domain/useCases/create-post";
import { AddCommentRepository } from "@/data/protocols";

export class DbAddCommentPost implements AddComment{
  constructor(private readonly addCommentRepository: AddCommentRepository){}

  async add(comment: AddComment.Params): Promise<AddComment.Result> {
   return this.addCommentRepository.add(comment)
  }
}