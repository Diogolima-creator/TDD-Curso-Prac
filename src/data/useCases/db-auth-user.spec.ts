import { DbAuthUser } from '@/data/useCases'
import { mockloadUser, throwError } from '@/domain'
import { LoadUserByEmailRepositorySpy, HashComparerSpy, EncrypterSpy ,UpdateAccessTokenRepositorySpy  } from '@/data/tests'

type SutTypes  ={
  sut: DbAuthUser
  loadUserByEmailRepositorySpy: LoadUserByEmailRepositorySpy
  hashComparerSpy: HashComparerSpy
  encrypterSpy: EncrypterSpy
  updateAccessTokenRepositorySpy: UpdateAccessTokenRepositorySpy
}

const makesut = (): SutTypes => {
  const loadUserByEmailRepositorySpy = new LoadUserByEmailRepositorySpy()
  const hashComparerSpy = new HashComparerSpy()
  const encrypterSpy = new EncrypterSpy()
  const updateAccessTokenRepositorySpy = new UpdateAccessTokenRepositorySpy()
  const sut = new DbAuthUser(
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

describe('DbAuthUser',() => {
 test('Should return params email if user auth is successful', async () => {
    const { sut, loadUserByEmailRepositorySpy } = makesut()
    const autheticationParams = mockloadUser()
    await sut.auth(autheticationParams)
    expect(loadUserByEmailRepositorySpy.email).toBe(autheticationParams.email)
  })

  test('Should throw if loadUserByEmail throws', async () => {
    const { sut, loadUserByEmailRepositorySpy } = makesut()
    jest.spyOn(loadUserByEmailRepositorySpy, 'findByEmail').mockImplementationOnce(throwError)
    const promise = sut.auth(mockloadUser())
    await expect(promise).rejects.toThrow()
  })
  
  test('Should return null if user is not found', async () => {
    const { sut, loadUserByEmailRepositorySpy } = makesut()
    loadUserByEmailRepositorySpy.result = null
    const promise = await sut.auth(mockloadUser())
    expect(promise).toBeNull
  })

  test('Should call hashComparer with correct values', async () => {
    const { sut, loadUserByEmailRepositorySpy, hashComparerSpy } = makesut()
    const autheticationParams = mockloadUser()
    await sut.auth(autheticationParams)
    expect(hashComparerSpy.plaintext).toBe(autheticationParams.password)
    expect(hashComparerSpy.digest).toBe(loadUserByEmailRepositorySpy.result.password)
  })

  test('Should return null if hashComparer return false', async () => {
    const { sut, hashComparerSpy } = makesut()
    hashComparerSpy.isValid = false
    const promise = await sut.auth(mockloadUser())
    expect(promise).toBeNull
  })


})
