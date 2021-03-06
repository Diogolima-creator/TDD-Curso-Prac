import { loadUser } from "@/domain/useCases/load-user";
import { LoadUserByEmailRepository, HashComparer, Encrypter, UpdateAccessTokenRepository } from "@/data/protocols";


export class DbAuthUser implements loadUser {
  constructor(
    private readonly loadUserByEmail: LoadUserByEmailRepository,
    private readonly hashComparer: HashComparer,
    private readonly encrypter: Encrypter,
    private readonly updateAccessTokenRepository: UpdateAccessTokenRepository
  ){}

  async auth(userDate: loadUser.Params): Promise<loadUser.Result>{
    const accountByEmail = await this.loadUserByEmail.findByEmail(userDate.email)
    if(accountByEmail){
      const isValid = await this.hashComparer.compare(userDate.password, accountByEmail.password)
      if(isValid){
        const accessToken = await this.encrypter.encrypt(accountByEmail.id)
        await this.updateAccessTokenRepository.updateAccessToken(accountByEmail.id, accessToken)
        return{
          accessToken,
          email: accountByEmail.email,
          status: 'ok',
          _id: accountByEmail.id
        }
      }
    }
    return null
  }
}