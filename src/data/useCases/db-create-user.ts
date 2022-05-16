import { addUser } from "@/domain/useCases/add-user";
import { CheckUserExistsRepository, Hasher, AddUserRepository } from "@/data/protocols";

export class DbCreateUser implements addUser{
  constructor(
    private readonly hasher: Hasher,
    private readonly addUserRepository: AddUserRepository,
    private readonly checkUserExistsRepository: CheckUserExistsRepository,
  ){}

  async add(userDate: addUser.Params): Promise<addUser.Result> {
   const exists = this.checkUserExistsRepository.checkByEmail(userDate.email)
   let isValid = false
   if(await exists === false){
    const hashedPassword = await this.hasher.hash(userDate.password)
    isValid = await this.addUserRepository.add({ ...userDate, password: hashedPassword})
   }
   return isValid
  }
}