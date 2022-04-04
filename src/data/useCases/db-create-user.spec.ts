import { DbCreateUser } from '@/data/useCases'
import { mockloadUser, throwError } from '@/domain'
import { CheckUserExistsRepositorySpy, HasherSpy, AddUserRepositorySpy  } from '@/data/tests'

type SutTypes  ={
  sut: DbCreateUser
  checkUserExistsRepositorySpy: CheckUserExistsRepositorySpy
  hasher: HasherSpy
  addUserRepositorySpy: AddUserRepositorySpy
}

const makesut = (): SutTypes => {
  const checkUserExistsRepositorySpy = new CheckUserExistsRepositorySpy()
  const hasher = new HasherSpy()
  const addUserRepositorySpy = new AddUserRepositorySpy()
  const sut = new DbCreateUser(
    checkUserExistsRepositorySpy,
    hasher,
    addUserRepositorySpy,
  )
  return {
    sut,
    checkUserExistsRepositorySpy,
    hasher,
    addUserRepositorySpy,
  }
}

describe('DbCreateUser',() => {
 test('Should did user created is successful ', () => {
    
  })

  
})
