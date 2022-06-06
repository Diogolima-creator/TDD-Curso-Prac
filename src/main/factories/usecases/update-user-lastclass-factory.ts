import { AccountMongoRepository } from "@/infra/db"
import {  UpdateLastClassUser } from "@/domain"
import {  DbUpdateLastClassUser } from "@/data/useCases"

export const makeDbUpdateLastClassUser = (): UpdateLastClassUser => {
  const accountMongoRepository = new AccountMongoRepository()
  return new DbUpdateLastClassUser(accountMongoRepository)
}