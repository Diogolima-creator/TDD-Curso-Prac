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
    const hashSpy = jest.spyOn(jwt, 'sign')
    await sut.encrypt('any_id')
    expect(hashSpy).toHaveBeenCalledWith({id: 'any_id'}, 'secret')
})
})
