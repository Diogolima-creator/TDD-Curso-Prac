import { DbAuthUser } from '@/data/useCases'
import { mockUser, throwError } from '@/tests/domain/mocks'
import { LoadUserByEmailRepositorySpy, HashComparerSpy, EncrypterSpy ,UpdateAccessTokenRepositorySpy  } from '@/tests/data/mocks'

type SutTypes  ={
  sut: DbAuthUser
  loadUserByEmailRepositorySpy: LoadUserByEmailRepositorySpy
  hashComparerSpy: HashComparerSpy
  encrypterSpy: EncrypterSpy
  updateAccessTokenRepositorySpy: UpdateAccessTokenRepositorySpy
}

const makeSut = (): SutTypes => {
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
    const { sut, loadUserByEmailRepositorySpy } = makeSut()
    const autheticationParams = mockUser()
    await sut.auth(autheticationParams)
    expect(loadUserByEmailRepositorySpy.email).toBe(autheticationParams.email)
  })

  test('Should throw if loadUserByEmailRepositorySpy throws', async () => {
    const { sut, loadUserByEmailRepositorySpy } = makeSut()
    jest.spyOn(loadUserByEmailRepositorySpy, 'findByEmail').mockImplementationOnce(throwError)
    const promise = sut.auth(mockUser())
    await expect(promise).rejects.toThrow()
  })
  
  test('Should return null if loadUserByEmailRepositorySpy is null', async () => {
    const { sut, loadUserByEmailRepositorySpy } = makeSut()
    loadUserByEmailRepositorySpy.result = null
    const promise = await sut.auth(mockUser())
    expect(promise).toBeNull
  })

  test('Should call hashComparerSpy with correct values', async () => {
    const { sut, loadUserByEmailRepositorySpy, hashComparerSpy } = makeSut()
    const autheticationParams = mockUser()
    await sut.auth(autheticationParams)
    expect(hashComparerSpy.plaintext).toBe(autheticationParams.password)
    expect(hashComparerSpy.digest).toBe(loadUserByEmailRepositorySpy.result.password)
  })

  test('Should return null if hashComparerSpy return false', async () => {
    const { sut, hashComparerSpy } = makeSut()
    hashComparerSpy.isValid = false
    const promise = await sut.auth(mockUser())
    expect(promise).toBeNull
  })

  test('Should throw if hashComparerSpy throws', async () => {
    const { sut, hashComparerSpy } = makeSut()
    jest.spyOn(hashComparerSpy, 'compare').mockImplementationOnce(throwError)
    const promise = sut.auth(mockUser())
    await expect(promise).rejects.toThrow()
  })

  test('Should call encrypterSpy with correct values', async () => {
    const { sut, loadUserByEmailRepositorySpy, encrypterSpy } = makeSut()
    const autheticationParams = mockUser()
    await sut.auth(autheticationParams)
    expect(encrypterSpy.plaintext).toBe(loadUserByEmailRepositorySpy.result.id)
  })

  test('Should throw if encrypterSpy throws', async () => {
    const { sut, encrypterSpy } = makeSut()
    jest.spyOn(encrypterSpy, 'encrypt').mockImplementationOnce(throwError)
    const promise = sut.auth(mockUser())
    await expect(promise).rejects.toThrow()
  })

  test('Should return an data on success', async () => {
    const { sut, loadUserByEmailRepositorySpy, encrypterSpy } = makeSut()
    const { accessToken, email} = await sut.auth(mockUser())
     expect(email).toBe(loadUserByEmailRepositorySpy.result.email)
     expect(accessToken).toBe(encrypterSpy.ciphertext)
  })

  test('Should call UpdateAccessTokenRepositorySpy with correct values', async () => {
    const { sut, updateAccessTokenRepositorySpy, loadUserByEmailRepositorySpy, encrypterSpy } = makeSut()
    await sut.auth(mockUser())
    expect(updateAccessTokenRepositorySpy.id).toBe(loadUserByEmailRepositorySpy.result.id)
    expect(updateAccessTokenRepositorySpy.token).toBe(encrypterSpy.ciphertext)
  })

  test('Should throw if UpdateAccessTokenRepositorySpy throws', async () => {
    const { sut, updateAccessTokenRepositorySpy } = makeSut()
    jest.spyOn(updateAccessTokenRepositorySpy, 'updateAccessToken').mockImplementationOnce(throwError)
    const promise = sut.auth(mockUser())
    await expect(promise).rejects.toThrow()
  })
})
