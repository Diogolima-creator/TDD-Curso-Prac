import { AccountMongoRepository } from "@/infra/db"
import {  UpdateClassUser } from "@/domain"
import {  DbUpdateClassUser } from "@/data/useCases"

export const makeDbGetProfileUser = (): GetProfileUser => {
  const accountMongoRepository = new AccountMongoRepository()
  return new DbGetProfileUser(accountMongoRepository)
}