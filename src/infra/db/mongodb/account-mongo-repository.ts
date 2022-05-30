import { MongoHelper } from "@/infra/db"
import { AddUserRepository, CheckUserExistsRepository, CreateUserRepository, LoadUserByEmailRepository, UpdateAccessTokenRepository, LoadAccountByTokenRepository, UpdateClassUserRepository, UpdateLastClassUserRepository, UpdateProfileRepository  } from '@/data/protocols'
import { ObjectId } from "mongodb"


export class AccountMongoRepository implements AddUserRepository, CheckUserExistsRepository , CreateUserRepository, LoadUserByEmailRepository , UpdateAccessTokenRepository, LoadAccountByTokenRepository, UpdateClassUserRepository, UpdateLastClassUserRepository, UpdateProfileRepository {

  async add(data: AddUserRepository.Params): Promise<AddUserRepository.Result> {
    const accountCollection = MongoHelper.getCollection('users')
    const result = await accountCollection.insertOne(data)
    return result.insertedId !== null 
  }

  async updateProfile (id: string, description: string, profilePic: string): Promise<void> {
    const accountCollection = MongoHelper.getCollection('users')
    await accountCollection.updateOne({
      _id: new ObjectId(id)
    }, {
      $set: {
        description,
        profilePic
      }
    })
  }

  async updateClass (id: string, Module: string, Class: string, urlVideo: string): Promise<void> {
    const accountCollection = MongoHelper.getCollection('users')
    await accountCollection.updateOne({
      _id: new ObjectId(id)
    }, {
      $set: {
        classes: [Module,Class,urlVideo]
      }
    })

  }

  async updateLastClass (id: string, posLastModule: number, posLastClass:number ): Promise<void> {
    const accountCollection = MongoHelper.getCollection('users')
    await accountCollection.updateOne({
      _id: new ObjectId(id)
    }, {
      $set: {
        LastClasses:[posLastModule,posLastClass]
      }
    })

  }

  async findByEmail (email:string): Promise<LoadUserByEmailRepository.Result> {
    const accountCollection = MongoHelper.getCollection('users')
    const account = await accountCollection.findOne({
      email
    },{
      projection:{
        _id: 1,
        username: 1,
        password: 1
      }
    })
    return account && MongoHelper.map(account)
  }

  async checkByUser (username:string): Promise<CheckUserExistsRepository.Result>{
    const accountCollection = MongoHelper.getCollection('users')

    const account = await accountCollection.findOne({
      username
    }, {
      projection:{
        _id: 1
      }
    })

    return account !== null
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
      _id: new ObjectId(id)
    }, {
      $set: {
        accessToken: token
      }
    })

  }

  async loadByToken (token: string, role?: string): Promise<LoadAccountByTokenRepository.Result> {
    const accountCollection = MongoHelper.getCollection('users')
    const account = await accountCollection.findOne({
      accessToken: token,
      $or: [{
        role
      }, {
        role: 'admin'
      }]
    }, {
      projection: {
        _id: 1
      }
    })
    return account && MongoHelper.map(account)
  }
}