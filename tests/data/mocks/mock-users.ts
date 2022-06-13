import { LoadUserByEmailRepository, CheckUserExistsRepository, UpdateAccessTokenRepository, AddUserRepository, LoadAccountByTokenRepository, UpdateClassUserRepository, UpdateProfileRepository, UpdateLastClassUserRepository } from "@/data/protocols";


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

export class LoadAccountByTokenRepositorySpy implements LoadAccountByTokenRepository{
  token: string
  role: string
  result = {
    id: 'id'
  }

  async loadByToken (token: string, role?: string): Promise<LoadAccountByTokenRepository.Result>{
    this.token = token 
    this.role = role 
    return this.result
  }
}

export class UpdateClassUserRepositorySpy implements UpdateClassUserRepository {
  id:string
  Module: string
  Class: string
  urlVideo: string
  
  async updateClass (id: string, Module: string, Class: string, urlVideo: string): Promise<void>{
    this.id = id
    this.Module = Module
    this.Class = Class
    this.urlVideo = urlVideo
  }
}

export class UpdateProfileRepositorySpy implements UpdateProfileRepository {
  id:string
  description: string 
  profilePic: string

  async updateProfile (id: string, description: string, profilePic: string): Promise<void>{
      this.id = id 
      this.description = description 
      this.profilePic = profilePic
  }
}

export class UpdateLastClassUserRepositorySpy implements UpdateLastClassUserRepository {
  id:string
  posLastModule: number 
  posLastClass: number

  async updateLastClass (id: string, posLastModule: number, posLastClass: number): Promise<void>{
      this.id = id
      this.posLastModule = posLastModule
      this.posLastClass = posLastClass
  }
  
}


