import { UserModel } from "@/domain/models";
import { User } from "@/domain/useCases/User";


export class CreateUser implements User{
  constructor(
      
  ){}

  async createUser(userDate: UserModel): Promise<UserModel> {

    return { id:'1', email:'dbz@gmail.com', password:'123' }
  }
}