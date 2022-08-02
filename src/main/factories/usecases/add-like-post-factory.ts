import { PostsMongoRepository } from "@/infra/db"
import {  AddLike } from "@/domain"
import {  DbAddLikePost } from "@/data/useCases"

export const makeDbAddLikePost = (): AddLike => {
  const postsMongoRepository = new PostsMongoRepository()
  return new DbAddLikePost(postsMongoRepository)
}