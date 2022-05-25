import { LoadAccountByToken } from '@/domain'
import { DbLoadAccountByToken } from '@/data/usecases'
import { AccountMongoRepository } from '@/infra/db'
import { JwtAdapter } from '@/infra/cryptography'

export const makeDbLoadAccountByToken = (): LoadAccountByToken => {
  const jwtAdapter = new JwtAdapter('123')
  const accountMongoRepository = new AccountMongoRepository()
  return new DbLoadAccountByToken(jwtAdapter, accountMongoRepository)
}