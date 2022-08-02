import { PostsMongoRepository } from "@/infra/db"
import {  RemoveLike } from "@/domain"
import {  DbRemoveLikePost } from "@/data/useCases"

export const makeDbRemoveLikePost = (): RemoveLike => {
  const postsMongoRepository = new PostsMongoRepository()
  return new DbRemoveLikePost(postsMongoRepository)
}