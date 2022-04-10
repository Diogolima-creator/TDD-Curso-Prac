import { DbCreateUser } from '@/data/useCases'
import { mockUser, throwError } from '@/domain'
import { CheckUserExistsRepositorySpy, HasherSpy, AddUserRepositorySpy  } from '@/data/tests'

type SutTypes  ={
  sut: DbCreateUser
  checkUserExistsRepositorySpy: CheckUserExistsRepositorySpy
  hasherSpy: HasherSpy
  addUserRepositorySpy: AddUserRepositorySpy
}

const makesut = (): SutTypes => {
  const checkUserExistsRepositorySpy = new CheckUserExistsRepositorySpy()
  const hasherSpy = new HasherSpy()
  const addUserRepositorySpy = new AddUserRepositorySpy()
  const sut = new DbCreateUser(
    checkUserExistsRepositorySpy,
    hasherSpy,
    addUserRepositorySpy,
  )
  return {
    sut,
    checkUserExistsRepositorySpy,
    hasherSpy,
    addUserRepositorySpy,
  }
}

describe('DbCreateUser',() => {
 test('Should return false if email exists ', async () => {
    const { sut, addUserRepositorySpy} = makesut()
    addUserRepositorySpy.result = false
    const promise = await sut.add(mockUser())
    expect(promise).toBe(false)
  })
  
  test('Should call Hasher with correct plaintext', async () => {
    const { sut, hasherSpy } = makesut()
    const addUserParams = mockUser()
    await sut.add(addUserParams)
    expect(hasherSpy.plaintext).toBe(addUserParams.password)
  })

  test('Should call addUserRepository with correct params', async () => {
    const { sut, addUserRepositorySpy, hasherSpy } = makesut()
    const addUserParams = mockUser()
    await sut.add(addUserParams)
    expect(addUserRepositorySpy.params).toEqual({
        email: addUserParams.email,
        password: hasherSpy.digest
    })
  })
})
