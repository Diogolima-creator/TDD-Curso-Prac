import { AccountMongoRepository } from "@/infra/db"
import {  UpdateProfile } from "@/domain"
import {  DbUpdateProfile } from "@/data/useCases"

export const makeDbUpdateProfile = (): UpdateProfile => {
  const accountMongoRepository = new AccountMongoRepository()
  return new DbUpdateProfile(accountMongoRepository)
}