import { addUser } from "@/domain/useCases/add-user";
import { CheckUserExistsRepository, Hasher, addUserRepository } from "@/data/protocols";

export class DbCreateUser implements addUser{
  constructor(
    private readonly checkUserExistsRepository: CheckUserExistsRepository,
    private readonly hasher: Hasher,
    private readonly addUserRepository: addUserRepository
  ){}

  async add(userDate: addUser.Params): Promise<addUser.Result> {
   const exist = this.checkUserExistsRepository.checkByEmail(userDate.email)
   let isValid = false
   if(!exist){
    const hashedPassword = await this.hasher.hash(userDate.password)
    isValid = await this.addUserRepository.add({ ...userDate, password:hashedPassword})
   }
   return isValid
  }
}