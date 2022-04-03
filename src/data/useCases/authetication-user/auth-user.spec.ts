import { AuthUser } from '@/data/useCases'
import { mockUserAuth } from '@/data/tests'


describe('CreateUser',() => {
 test('Should user created on sut.createUser', () => {
    const sut = new AuthUser()
    const promise = sut.auth(mockUserAuth())
    expect(promise).toEqual(Object(promise))
  })

})
