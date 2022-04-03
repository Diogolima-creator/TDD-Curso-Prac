import { DbCreateUser } from '@/data/useCases'
import { mockUserCreate, mockUserEmailinUse, mockUserCreateNull } from '@/data/tests'


describe('DbCreateUser',() => {
 test('Should did user created is successful ', () => {
    const sut = new DbCreateUser()
    const promise = sut.add(mockUserCreate())
    expect(promise).toBeTruthy()
  })

  test('Should userDate pass value null catch error', () => {
    const sut = new DbCreateUser()
    const promise = sut.add(mockUserCreateNull())
    expect(promise).rejects.toThrow('userDate null')
  })

  test('Should userDate passing an email in use to return an error', () => {
    const sut = new DbCreateUser()
    const promise = sut.add(mockUserEmailinUse())
    expect(promise).rejects.toThrow('Email in user error')
  })
})
