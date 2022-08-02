import { AddLike } from "@/domain";
import { AddLikeRepository } from "@/data/protocols";

export class DbAddLikePost implements AddLike{
  constructor(private readonly addLikeRepository: AddLikeRepository){}

  async add(likeId: AddLike.Params): Promise<AddLike.Result> {
   return this.addLikeRepository.addLike(likeId)
  }
}