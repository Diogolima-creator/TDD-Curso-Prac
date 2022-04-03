import { AuthUser } from '@/data/useCases'
import { mockUserAuth,mockUserEmailWrong, mockUserPassWrong } from '@/data/tests'


describe('CreateUser',() => {
 test('Should user auth is successful', () => {
    const sut = new AuthUser()
    const promise = sut.auth(mockUserAuth())
    expect(promise).toEqual(Object(promise))
  })

  test('Should user is not found', () => {
    const sut = new AuthUser()
    const promise = sut.auth(mockUserEmailWrong())
    expect(promise).rejects.toThrow('User not found')
  })

  test('Should user pass the wrong password', () => {
    const sut = new AuthUser()
    const promise = sut.auth(mockUserPassWrong())
    expect(promise).rejects.toThrow('Pass is wrong')
  })
})
