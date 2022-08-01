import { PostsMongoRepository } from "@/infra/db"
import {  GetPost } from "@/domain"
import {  DbGetPost } from "@/data/useCases"

export const makeDbGetPost = (): GetPost => {
  const postsMongoRepository = new PostsMongoRepository()
  return new DbGetPost(postsMongoRepository)
}