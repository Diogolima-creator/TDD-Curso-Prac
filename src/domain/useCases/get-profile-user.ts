import { UserModel } from "../models"

export interface GetProfile {
  update: (userDate: GetProfile.Params) => Promise<void>
}

export namespace GetProfile{
  export type Params = {
      id?: string
  }

  export type Result = {
      profile: UserModel
  }   
}