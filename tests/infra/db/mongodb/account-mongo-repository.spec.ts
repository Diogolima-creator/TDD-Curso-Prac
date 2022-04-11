import { AccountMongoRepository, MongoHelper } from '@/infra/db'
import { mockUser } from '@/tests/domain/mocks'

import { Collection } from 'mongodb'

const makeSut = (): AccountMongoRepository => {
  return new AccountMongoRepository()
}

let accountCollection: Collection

describe('AccountMongoRepository', () => {
  beforeAll(async() => {
    await MongoHelper.connect('mongodb://localhost/lojavirtual')
  })

  afterAll(async() => {
    await MongoHelper.disconnect()
  })

  beforeEach(async() => {
    accountCollection = MongoHelper.getCollection('users')
  })
  
})

