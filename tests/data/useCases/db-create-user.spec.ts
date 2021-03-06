import { DbCreateUser } from '@/data/useCases'
import { mockUser, throwError } from '@/tests/domain/mocks'
import { CheckUserExistsRepositorySpy, HasherSpy, AddUserRepositorySpy  } from '@/tests/data/mocks'

type SutTypes  ={
  sut: DbCreateUser
  checkUserExistsRepositorySpy: CheckUserExistsRepositorySpy
  hasherSpy: HasherSpy
  addUserRepositorySpy: AddUserRepositorySpy
}

const makeSut = (): SutTypes => {
  const checkUserExistsRepositorySpy = new CheckUserExistsRepositorySpy()
  const hasherSpy = new HasherSpy()
  const addUserRepositorySpy = new AddUserRepositorySpy()
  const sut = new DbCreateUser(
    hasherSpy,
    addUserRepositorySpy,
    checkUserExistsRepositorySpy
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
    const { sut, addUserRepositorySpy} = makeSut()
    addUserRepositorySpy.result = false
    const promise = await sut.add(mockUser())
    expect(promise).toBe(false)
  })
  
  test('Should call Hasher with correct plaintext', async () => {
    const { sut, hasherSpy } = makeSut()
    const addUserParams = mockUser()
    await sut.add(addUserParams)
    expect(hasherSpy.plaintext).toBe(addUserParams.password)
  })

  test('Should call addUserRepository with correct params', async () => {
    const { sut, addUserRepositorySpy, hasherSpy } = makeSut()
    const addUserParams = mockUser()
    await sut.add(addUserParams)
    expect(addUserRepositorySpy.params).toEqual({
        email: addUserParams.email,
        password: hasherSpy.digest
    })
  })

  test('Should throw if addUserRepositorySpy throws', async () => {
    const { sut,addUserRepositorySpy } = makeSut()
    jest.spyOn(addUserRepositorySpy, 'add').mockImplementationOnce(throwError)
    const promise = sut.add(mockUser())
    await expect(promise).rejects.toThrow()
  })

  test('Should return true on success', async () => {
    const { sut } = makeSut()
    const isValid = await sut.add(mockUser())
    expect(isValid).toBe(true)
  })

  test('Should return false if CheckAccountByEmailRepository returns true', async () => {
    const { sut, checkUserExistsRepositorySpy } = makeSut()
    checkUserExistsRepositorySpy.result = false
    const isValid = await sut.add(mockUser())
    expect(isValid).toBe(true)
  })

  test('Should call LoadAccountByEmailRepository with correct email', async () => {
    const { sut, checkUserExistsRepositorySpy } = makeSut()
    const addUserParams = mockUser()
    await sut.add(addUserParams)
    expect(checkUserExistsRepositorySpy.email).toBe(addUserParams.email)
  })
})
