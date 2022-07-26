import { UserModel } from "../models"

export interface loadUser {
    auth?: (userDate: UserModel) => Promise<loadUser.Result>
}

export namespace loadUser{
    export type Params = UserModel
    
    export type Result = {
        accessToken: string
        email?: string
        username?: string
        status: string
        _id: string
      }
}