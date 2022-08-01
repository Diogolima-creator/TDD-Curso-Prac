import { PostsMongoRepository } from "@/infra/db"
import {  CreatePost } from "@/domain"
import {  DbCreatePost } from "@/data/useCases"

export const makeDbCreatePost = (): CreatePost => {
  const postsMongoRepository = new PostsMongoRepository()
  return new DbCreatePost(postsMongoRepository)
}