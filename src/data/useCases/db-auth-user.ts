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
    const account = await this.loadUserByEmail.findByEmail(userDate.email)
    if(account){
      const isValid = await this.hashComparer.compare(userDate.password, account.password)
      if(isValid){
        const accessToken = await this.encrypter.encrypt(account.id)
        await this.updateAccessTokenRepository.updateAccessToken(account.id, accessToken)
        return{
          accessToken,
          email: account.email
        }
      }
    }
    return null
  }
}