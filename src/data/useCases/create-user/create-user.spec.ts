import { CreateUser } from '@/data/useCases'
import { mockUserCreate, mockUserEmailinUse, mockUserNull } from '@/data/tests'


describe('CreateUser',() => {
 test('Should did user created is successful ', () => {
    const sut = new CreateUser()
    const promise = sut.create(mockUserCreate())
    expect(promise).toEqual(Object(promise))
  })

  test('Should userDate pass value null catch error', () => {
    const sut = new CreateUser()
    const promise = sut.create(mockUserNull())
    expect(promise).rejects.toThrow('userDate null')
  })

  test('Should userDate passing an email in use to return an error', () => {
    const sut = new CreateUser()
    const promise = sut.create(mockUserEmailinUse())
    expect(promise).rejects.toThrow('Email in user error')
  })
})
