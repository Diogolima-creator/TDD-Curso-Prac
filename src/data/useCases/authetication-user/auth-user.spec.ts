import { AuthUser } from '@/data/useCases'
import { mockUserAuth,mockUserEmailWrong } from '@/data/tests'


describe('CreateUser',() => {
 test('Should user auth is successful', () => {
    const sut = new AuthUser()
    const promise = sut.auth(mockUserAuth())
    expect(promise).toEqual(Object(promise))
  })

  test('Should user auth is successful', () => {
    const sut = new AuthUser()
    const promise = sut.auth(mockUserEmailWrong())
    expect(promise).rejects.toThrow('Email is wrong')
  })
})
