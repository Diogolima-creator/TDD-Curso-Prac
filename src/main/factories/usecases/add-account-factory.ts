import { DbCreateUser } from '@/data/useCases'
import { addUser } from '@/domain'
import { AccountMongoRepository } from '@/infra/db'
import { BcryptAdapter } from '@/infra/cryptography'

export const makeDbAddAccount = (): addUser => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbCreateUser(bcryptAdapter, accountMongoRepository, accountMongoRepository)
}