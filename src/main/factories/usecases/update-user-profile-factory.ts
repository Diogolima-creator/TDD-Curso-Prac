import { AccountMongoRepository } from "@/infra/db"
import {  UpdateProfile } from "@/domain"
import {  DbUpdateProfileClass } from "@/data/useCases"

export const makeDbUpdateProfile = (): UpdateProfile => {
  const accountMongoRepository = new AccountMongoRepository()
  return new DbUpdateProfileClass(accountMongoRepository)
}