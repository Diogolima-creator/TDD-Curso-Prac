import { AccountMongoRepository } from "@/infra/db"
import { BcryptAdapter, JwtAdapter } from "@/infra/cryptography"
import { DbAuthUser } from "@/data/useCases"
import { loadUser } from "@/domain"

export const makeDbAuthentication = (): loadUser => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter('!@#$%¨&*(')
  const accountMongoRepository = new AccountMongoRepository()
  return new DbAuthUser(accountMongoRepository, bcryptAdapter, jwtAdapter, accountMongoRepository )
}