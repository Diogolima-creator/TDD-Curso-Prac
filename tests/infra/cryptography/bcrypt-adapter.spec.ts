import { BcryptAdapter } from "@/infra/cryptography"
import { throwError } from "@/tests/domain/mocks"
import bcrypt from 'bcrypt'

jest.mock('bcrypt', () => ({

  async hash(): Promise<string>{
    return 'hash'
  },

  async compare(): Promise<boolean>{
    return true
  }
}))

const salt = 12
const makeSut = ():BcryptAdapter => {
  return new BcryptAdapter(salt)
}

describe('Bcrypter Adapter',() => {
 test('Should call hash with correct values', async () => {
      const sut = makeSut()
      const hashSpy = jest.spyOn(bcrypt, 'hash')
      await sut.hash('any_value')
      expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
  })

  test('Should return a valid hash on hash success', async () => {
    const sut = makeSut()
    const promise = await sut.hash('any_value')
    expect(promise).toEqual('hash')
  })

  test('Should throw if hash throws', async () => {
    const sut = makeSut()
    jest.spyOn(sut, 'hash').mockImplementationOnce(throwError)
    const promise = await sut.hash('any_value')
    await expect(promise).rejects.toThrow()
  })
})
