import { UserModel } from "@/domain/models"

export interface LoadUserByEmail{
  findByEmail:(data: LoadUserByEmail.Params) => Promise<LoadUserByEmail.Result>
}

export namespace LoadUserByEmail{
  export type Params = UserModel.Params
  export type Result = boolean
}