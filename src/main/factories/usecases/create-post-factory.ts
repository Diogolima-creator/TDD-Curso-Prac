import { AccountMongoRepository } from "@/infra/db"
import {  CreatePost } from "@/domain"
import {  DbCreatePost } from "@/data/useCases"

export const makeDbCreatePost = (): CreatePost => {
  const accountMongoRepository = new AccountMongoRepository()
  return new DbCreatePost(accountMongoRepository)
}