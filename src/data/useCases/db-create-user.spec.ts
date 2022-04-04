import { DbCreateUser } from '@/data/useCases'
import { mockloadUser, throwError } from '@/domain'
import { CheckUserExistsRepositorySpy, HasherSpy  } from '@/data/tests'

type SutTypes  ={
  sut: DbCreateUser
  CheckUserExistsRepositorySpy: CheckUserExistsRepositorySpy
  hasher: HasherSpy
  addUserRepositorySpy: addUserRepositorySpy
}

const makesut = (): SutTypes => {
  const loadUserByEmailRepositorySpy = new LoadUserByEmailRepositorySpy()
  const hashComparerSpy = new HashComparerSpy()
  const encrypterSpy = new EncrypterSpy()
  const updateAccessTokenRepositorySpy = new UpdateAccessTokenRepositorySpy()
  const sut = new DbCreateUser(
    loadUserByEmailRepositorySpy,
    hashComparerSpy,
    encrypterSpy,
    updateAccessTokenRepositorySpy
  )
  return {
    sut,
    loadUserByEmailRepositorySpy,
    hashComparerSpy,
    encrypterSpy,
    updateAccessTokenRepositorySpy
  }
}
describe('DbCreateUser',() => {
 test('Should did user created is successful ', () => {
    
  })

  
})
