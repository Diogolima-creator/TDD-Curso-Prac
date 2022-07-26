import { AccountMongoRepository } from "@/infra/db"
import {  GetProfileUser } from "@/domain"
import {  DbGetProfileUser } from "@/data/useCases"

export const makeDbGetProfileUser = (): GetProfileUser => {
  const accountMongoRepository = new AccountMongoRepository()
  return new DbGetProfileUser(accountMongoRepository)
}