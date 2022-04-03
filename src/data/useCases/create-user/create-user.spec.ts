import { CreateUser } from '@/data/useCases'
import { mockUser, mockUserEmailinUse, mockUserNull } from '@/data/tests'


describe('CreateUser',() => {
 test('Should user created on sut.createUser', () => {
    const sut = new CreateUser()
    const promise = sut.create(mockUser())
    expect(promise).toEqual(Object(promise))
  })

  test('Should userDate pass value null catch error', () => {
    const sut = new CreateUser()
    const promise = sut.create(mockUserNull())
    expect(promise).rejects.toThrow('userDate null')
  })

  test('Should userDate passing an email in use ', () => {
    const sut = new CreateUser()
    const promise = sut.create(mockUserEmailinUse())
    expect(promise).rejects.toThrow('Email in user error')
  })
})
