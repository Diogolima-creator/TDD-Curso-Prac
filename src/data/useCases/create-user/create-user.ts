import { UserModel } from "@/domain/models";
import { User } from "@/domain/useCases/User";
import { HttpStatusCode } from "@/data/protocols/http";

export class CreateUser implements User{
  constructor(
      
  ){}

  async create(userDate: UserModel): Promise<UserModel> {
    if(userDate !== null && userDate.email !== 'dbz@gmail.com'){
      return userDate
    }
    if(userDate === null){
      throw new Error('userDate null')
    }
    if(userDate.email === 'dbz@gmail.com'){
      throw new Error('Email in user error')
    }
    
  }
}