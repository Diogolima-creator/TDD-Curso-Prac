import { LoadUserByEmailRepository, UpdateAccessTokenRepository } from "@/data/protocols";


export class LoadUserByEmailRepositorySpy implements LoadUserByEmailRepository {
    email: string
    result = {
        id: '1',
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
