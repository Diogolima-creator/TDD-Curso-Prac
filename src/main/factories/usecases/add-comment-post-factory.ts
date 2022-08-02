import { PostsMongoRepository } from "@/infra/db"
import {  AddComment } from "@/domain"
import {  DbAddCommentPost } from "@/data/useCases"

export const makeDbAddCommentPost = (): AddComment => {
  const postsMongoRepository = new PostsMongoRepository()
  return new DbAddCommentPost(postsMongoRepository)
}