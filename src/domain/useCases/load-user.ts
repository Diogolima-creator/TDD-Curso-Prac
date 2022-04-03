import { UserModel } from "../models"

export interface loadUser {
    auth?: (userDate: UserModel) => Promise<loadUser.Result>
}

export namespace loadUser{
    export type Params = UserModel
    
    export type Result = {
        accessToken: string
        name: string
      }
}