import { UserModel } from "@/domain/models";
import { addUser } from "@/domain/useCases/add-user";

export class CreateUser implements addUser{
  constructor(
      
  ){}

  async add(userDate: UserModel.Params): Promise<UserModel.Result> {
    if(userDate !== null && userDate.email !== 'dbz@gmail.com'){
      return true
    }
    if(userDate === null){
      throw new Error('userDate null')
    }
    if(userDate.email === 'dbz@gmail.com'){
      throw new Error('Email in user error')
    }
  }
}