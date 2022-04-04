import { DbAuthUser } from '@/data/useCases'
import { loadUserByEmailSpy, HashComparerSpy, EncrypterSpy ,UpdateAccessTokenRepositorySpy } from '@/data/tests'

type SutTypes  ={
  sut: DbAuthUser
  loadUserByEmailSpy: loadUserByEmailSpy
  HashComparerSpy: HashComparerSpy
  EncrypterSpy: EncrypterSpy
  UpdateAccessTokenRepositorySpy: UpdateAccessTokenRepositorySpy
}

const makesut = (): SutTypes => {
  
}
describe('DbAuthUser',() => {
 test('Should user auth is successful', () => {
    const sut = new DbAuthUser()
    const promise = sut.auth(mockUserAuth())
    expect(promise).toBeTruthy()
  })

  test('Should user is not found', () => {
    const sut = new DbAuthUser()
    const promise = sut.auth(mockUserEmailWrong())
    expect(promise).rejects.toThrow('User not found')
  })

  test('Should user pass the wrong password', () => {
    const sut = new DbAuthUser()
    const promise = sut.auth(mockUserPassWrong())
    expect(promise).rejects.toThrow('Pass is wrong')
  })
})
