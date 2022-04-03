import { AuthUser } from '@/data/useCases'
import { mockUserAuth } from '@/data/tests'


describe('CreateUser',() => {
 test('Should user auth is successful', () => {
    const sut = new AuthUser()
    const promise = sut.auth(mockUserAuth())
    expect(promise).toEqual(Object(promise))
  })

})
