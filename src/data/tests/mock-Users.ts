import { LoadUserByEmailRepository, CheckUserExistsRepository, UpdateAccessTokenRepository, addUserRepository } from "@/data/protocols";


export class LoadUserByEmailRepositorySpy implements LoadUserByEmailRepository {
    email: string
    result = {
        id: '12345',
        email: 'dbz@gmail.com',
        password: '123'
    }

    async findByEmail (email: string): Promise<LoadUserByEmailRepository.Result> {
      this.email = email
      return this.result
    }
}

export class UpdateAccessTokenRepositorySpy implements UpdateAccessTokenRepository{
    id: string
    token: string

    async updateAccessToken (id: string, token: string): Promise<void> {
      this.id = id
      this.token = token
    }
}

export class CheckUserExistsRepositorySpy implements CheckUserExistsRepository {
  email: string
  result = false

  async checkByEmail (email: string): Promise<boolean>{
    this.email = email
    return false
  }
}

export class addUserRepositorySpy implements addUserRepository{
  params: addUserRepository.Params
  result = true
  async add (date:addUserRepository.Params) : Promise<addUserRepository.Result>{
    this.params = date
    return this.result
  }
}

