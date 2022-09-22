import { LoadAccountByToken } from '@/domain'
import { DbLoadAccountByToken } from '@/data/useCases'
import { AccountMongoRepository } from '@/infra/db'
import { JwtAdapter } from '@/infra/cryptography'

export const makeDbLoadAccountByToken = (): LoadAccountByToken => {
  const jwtAdapter = new JwtAdapter('!@#$%¨&*(')
  const accountMongoRepository = new AccountMongoRepository()
  return new DbLoadAccountByToken(jwtAdapter, accountMongoRepository)
}