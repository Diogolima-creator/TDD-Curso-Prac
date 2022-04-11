import { MongoHelper } from "@/infra/db"
import { AddUserRepository, CheckUserExistsRepository, CreateUserRepository, LoadUserByEmailRepository, UpdateAccessTokenRepository } from '@/data/protocols'


export class AccountMongoRepository implements AddUserRepository, CheckUserExistsRepository , CreateUserRepository, LoadUserByEmailRepository , UpdateAccessTokenRepository {

  async add(data: AddUserRepository.Params): Promise<AddUserRepository.Result> {
    const accountCollection = MongoHelper.getCollection('users')
    const result = await accountCollection.insertOne(data)
    return result.insertedId !== null 
  }

  async findByEmail (email:string): Promise<LoadUserByEmailRepository.Result> {
    const accountCollection = MongoHelper.getCollection('users')
    const account = await accountCollection.findOne({
      email
    },{
      projection:{
        _id: 1,
        name: 1,
        password: 1
      }
    })
    return account && MongoHelper.map(account)
  }

  async checkByEmail (email: string): Promise<CheckUserExistsRepository.Result> {
    const accountCollection = MongoHelper.getCollection('users')
    const account = await accountCollection.findOne({
      email
    }, {
      projection:{
        _id: 1
      }
    })
    return account !== null
  }

  async updateAccessToken (id: string, token: string): Promise<void> {
    const accountCollection = MongoHelper.getCollection('users')
    await accountCollection.updateOne({
      _id: id
    }, {
      $set: {
        accessToken: token
      }
    })
  }
}