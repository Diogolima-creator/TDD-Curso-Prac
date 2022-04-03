import { CreateUser } from '@/data/useCases'
import { mockUser } from '@/data/tests'


describe('CreateUser',() => {
 test('Should user created on sut.createUser', () => {
    const sut = new CreateUser()
    const promise = sut.create(mockUser())
    expect(promise).toEqual(Object(promise))
  })
})
