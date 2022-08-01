import { AccountMongoRepository } from "@/infra/db"
import {  GetProfileUser } from "@/domain"
import {  DbGetProfileUser } from "@/data/useCases"

export const makeDbGetPost = (): GetProfileUser => {
  const accountMongoRepository = new AccountMongoRepository()
  return new DbGetProfileUser(accountMongoRepository)
}