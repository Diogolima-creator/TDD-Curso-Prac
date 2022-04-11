import { JwtAdapter } from '@/infra/cryptography'
import { throwError } from '@/tests/domain/mocks'
import jwt from 'jsonwebtoken'

jest.mock('jsonwebtoken', () => ({

  async sign(): Promise<string>{
    return 'any_token'
  },

  async verify(): Promise<string>{
    return 'any_value'
  }
}))

const makeSut = ():JwtAdapter => {
  return new JwtAdapter('secret')
}

describe('Jwt Adapter',() => {
  test('Should call sign with correct values', async () => {
    const sut = makeSut()
    const jwtSpy = jest.spyOn(jwt, 'sign')
    await sut.encrypt('any_id')
    expect(jwtSpy).toHaveBeenCalledWith({id: 'any_id'}, 'secret')
  })

  test('Should return a token on sign success', async () => {
    const sut = makeSut()
    const promise = await sut.encrypt('any_id')
    expect(promise).toBe('any_token')
  })

  test('Should throw if sign throws', async () => {
    const sut = makeSut()
    jest.spyOn(jwt, 'sign').mockImplementationOnce(throwError)
    const promise = sut.encrypt('any_id')
    await expect(promise).rejects.toThrow()
  })
  
  test('Should call verify with correct values', async () => {
    const sut = makeSut()
    const jwtSpy = jest.spyOn(jwt, 'verify')
    await sut.decrypt('any_token')
    expect(jwtSpy).toHaveBeenCalledWith('any_token', 'secret')
  })
})
