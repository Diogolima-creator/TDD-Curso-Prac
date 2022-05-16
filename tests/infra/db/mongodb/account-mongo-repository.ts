import { AccountMongoRepository } from '@/infra/db'
import { mockUser } from '@/tests/domain/mocks'
import { Collection } from 'mongodb'


const makeSut = (): AccountMongoRepository => {
  return new AccountMongoRepository()
}

let accountCollection: Collection

describe('AccountMongoRepository', () => {
 
  describe('add()',() => {
   test('Should return an account on sucess', async () => {
      const sut = makeSut()
      const addAccountParams = mockUser()
      const isValid = await sut.add(addAccountParams)
      expect(isValid).toBe(true)
    })
  })

  describe('findByEmail()',() => {
    test('Should return an account on sucess', async () => {
       const sut = makeSut()
       const addAccountParams = mockUser()
       const account = await sut.findByEmail(addAccountParams.email)
       expect(account).toBeTruthy()
       expect(account.id).toBeTruthy()
       expect(account.password).toBe(addAccountParams.password)
     })
   })
  
})

