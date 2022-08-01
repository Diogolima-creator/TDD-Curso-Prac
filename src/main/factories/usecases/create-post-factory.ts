import { AccountMongoRepository } from "@/infra/db"
import {  GetProfileUser } from "@/domain"
import {  DbGetProfileUser } from "@/data/useCases"

export const makeDbCreatePost = (): GetProfileUser => {
  const accountMongoRepository = new AccountMongoRepository()
  return new DbGetProfileUser(accountMongoRepository)
}