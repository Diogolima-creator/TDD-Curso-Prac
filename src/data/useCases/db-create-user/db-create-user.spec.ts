import { CreateUser } from '@/data/useCases'
import { mockUserCreate, mockUserEmailinUse, mockUserCreateNull } from '@/data/tests'


describe('CreateUser',() => {
 test('Should did user created is successful ', () => {
    const sut = new CreateUser()
    const promise = sut.add(mockUserCreate())
    expect(promise).toBe(true)
  })

  test('Should userDate pass value null catch error', () => {
    const sut = new CreateUser()
    const promise = sut.add(mockUserCreateNull())
    expect(promise).rejects.toThrow('userDate null')
  })

  test('Should userDate passing an email in use to return an error', () => {
    const sut = new CreateUser()
    const promise = sut.add(mockUserEmailinUse())
    expect(promise).rejects.toThrow('Email in user error')
  })
})
