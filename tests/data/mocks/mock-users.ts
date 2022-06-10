import { LoadUserByEmailRepository, CheckUserExistsRepository, UpdateAccessTokenRepository, AddUserRepository } from "@/data/protocols";


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
  id: string
  result = false

  async checkByEmail (email: string): Promise<boolean>{
    this.email = email
    return this.result
  }

  async checkByUser (id: string): Promise<boolean>{
    this.id = id
    return this.result
  }
}

export class AddUserRepositorySpy implements AddUserRepository{
  params: AddUserRepository.Params
  result = true
  async add (date:AddUserRepository.Params) : Promise<AddUserRepository.Result>{
    this.params = date
    return this.result
  }
}

