import { AccountMongoRepository } from "@/infra/db"
import {  UpdateClassUser } from "@/domain"
import {  DbUpdateClassUser } from "@/data/useCases"

export const makeDbUpdateClassUser = (): UpdateClassUser => {
  const accountMongoRepository = new AccountMongoRepository()
  return new DbUpdateClassUser(accountMongoRepository)
}