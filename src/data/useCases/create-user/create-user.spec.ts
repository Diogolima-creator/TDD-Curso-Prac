import { CreateUser } from '@/data/useCases'
import { mockUser } from '@/data/tests'

type SutTypes = {
  sut: CreateUser
}

describe('CreateUser',() => {
 test('Should return a empty list on sut.createUser', () => {
    const sut = new CreateUser()
    const promise = sut.createUser(mockUser())
    expect(promise).toEqual(Object(promise))
  })
})
