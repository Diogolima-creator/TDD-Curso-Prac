import { AccountMongoRepository } from "@/infra/db"
import {  GetPost } from "@/domain"
import {  DbGetPost } from "@/data/useCases"

export const makeDbGetPost = (): GetPost => {
  const accountMongoRepository = new AccountMongoRepository()
  return new DbGetPost(accountMongoRepository)
}