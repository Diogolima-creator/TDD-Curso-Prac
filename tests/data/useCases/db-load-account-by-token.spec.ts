import { DbLoadAccountByToken } from "@/data/useCases"
import { mockUser, throwError } from "@/tests/domain/mocks"
import { DecrypterSpy, LoadAccountByTokenRepositorySpy } from '@/tests/data/mocks'

type SutTypes = {
  sut: DbLoadAccountByToken
  decrypterSpy: DecrypterSpy
  loadAccountByTokenRepositorySpy: LoadAccountByTokenRepositorySpy
}

const makeSut = (): SutTypes => {
  const decrypterSpy = new DecrypterSpy()
  const loadAccountByTokenRepositorySpy = new LoadAccountByTokenRepositorySpy()
  const sut = new DbLoadAccountByToken(decrypterSpy, loadAccountByTokenRepositorySpy)

  return {
    sut,
    decrypterSpy,
    loadAccountByTokenRepositorySpy
  }
}

let token: string 
let role : string 

describe('DbLoadAccountToken UseCase', () => {
    beforeEach(() => {
      token = '123'
      role = 'admin'
    })

    test('Should call Decrypter with correct ciphertext', async () => {
      const { sut, decrypterSpy } = makeSut()
      await sut.load(token, role)
      expect(decrypterSpy.ciphertext).toBe(token)
    })

    test('Should return null if Decrypter returns null', async () => {
      const { sut, decrypterSpy } = makeSut()
      decrypterSpy.plaintext = null
      const account = await sut.load(token,role)
      expect(account).toBeNull()
    })

    test('Should call LoadAccountByTokenRepository with correct values', async () => {
      const { sut, loadAccountByTokenRepositorySpy } = makeSut()
      await sut.load(token, role)
      expect(loadAccountByTokenRepositorySpy.token).toBe(token)
      expect(loadAccountByTokenRepositorySpy.role).toBe(role)
    })

    test('Should return null if LoadAccountByTokenRepository returns null', async () => {
      const { sut, loadAccountByTokenRepositorySpy } = makeSut()
      loadAccountByTokenRepositorySpy.result = null
      const account = await sut.load(token,role)
      expect(account).toEqual(loadAccountByTokenRepositorySpy.result)
    })

    test('Should return an account on success', async () => {
      const { sut, loadAccountByTokenRepositorySpy } = makeSut()
      const account = await sut.load(token, role)
      expect(account).toEqual(loadAccountByTokenRepositorySpy.result)
    })

    test('Should throw if Decrypter throws', async () => {
      const { sut, decrypterSpy } = makeSut()
      jest.spyOn(decrypterSpy, 'decrypt').mockImplementationOnce(throwError)
      const account = await sut.load(token, role)
      await expect(account).toBeNull()
    })
})