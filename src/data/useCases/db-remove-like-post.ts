import { RemoveLike } from "@/domain";
import { RemoveLikeRepository } from "@/data/protocols";

export class DbRemoveLikePost implements RemoveLike{
  constructor(private readonly removeLikeRepository: RemoveLikeRepository){}

  async remove(likeId: RemoveLike.Params): Promise<RemoveLike.Result> {
   return this.removeLikeRepository.removeLike(likeId)
  }
}