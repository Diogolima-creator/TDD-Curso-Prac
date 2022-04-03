import { UserModel } from "@/domain/models";
import { loadUser } from "@/domain/useCases/load-user";


export class AuthUser implements loadUser {
  constructor(){}

  async auth(userDate: UserModel): Promise<UserModel>{
    if(userDate.email === 'dbz@gmail.com' && userDate.password === '123'){
      return userDate
    }
    if(userDate.email !== 'dbz@gmail.com'){
      throw new Error('User not found')
    }
    if(userDate.password !== '123'){
      throw new Error('Pass is wrong')
    }
  }
}