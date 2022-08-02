import { AddLike } from "@/domain/useCases/create-post";
import { AddLikeRepository } from "@/data/protocols";

export class DbAddLikePost implements AddLike{
  constructor(private readonly addLikeRepository: AddLikeRepository){}

  async add(likeId: AddLike.Params): Promise<AddLike.Result> {
   return this.addLikeRepository.add(likeId)
  }
}