import { UserModel } from "../models"

export interface GetProfileUser {
  get: (userDate: GetProfileUser.Params) => Promise<GetProfileUser.Result>
}

export namespace GetProfileUser{
  export type Params = {
      id?: string
  }

  export type Result = UserModel 
}