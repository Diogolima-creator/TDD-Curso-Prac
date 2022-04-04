import { DbAuthUser } from '@/data/useCases'
import { LoadUserByEmailRepositorySpy, HashComparerSpy, EncrypterSpy ,UpdateAccessTokenRepositorySpy } from '@/data/tests'

type SutTypes  ={
  sut: DbAuthUser
  loadUserByEmailRepositorySpy: LoadUserByEmailRepositorySpy
  hashComparerSpy: HashComparerSpy
  encrypterSpy: EncrypterSpy
  updateAccessTokenRepositorySpy: UpdateAccessTokenRepositorySpy
}

const makesut = (): SutTypes => {
  const loadUserByEmailRepositorySpy = new LoadUserByEmailRepositorySpy()
  const hashComparerSpy = new HashComparerSpy()
  const encrypterSpy = new EncrypterSpy()
  const updateAccessTokenRepositorySpy = new UpdateAccessTokenRepositorySpy()
  const sut = new DbAuthUser(
    loadUserByEmailRepositorySpy,
    hashComparerSpy,
    encrypterSpy,
    updateAccessTokenRepositorySpy
  )
  return {
    sut,
    loadUserByEmailRepositorySpy,
    hashComparerSpy,
    encrypterSpy,
    updateAccessTokenRepositorySpy
  }
}

describe('DbAuthUser',() => {
 test('Should user auth is successful', () => {
    const { sut, loadUserByEmailRepositorySpy } = makesut()
    
  })

  
})
