import { RemoveLike } from "@/domain/useCases/create-post";
import { RemoveLikeRepository } from "@/data/protocols";

export class DbAddLikePost implements RemoveLike{
  constructor(private readonly removeLikeRepository: RemoveLikeRepository){}

  async remove(likeId: RemoveLike.Params): Promise<RemoveLike.Result> {
   return this.removeLikeRepository.remove(likeId)
  }
}