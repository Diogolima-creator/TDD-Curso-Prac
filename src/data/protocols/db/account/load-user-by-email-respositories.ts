import { loadUser } from "@/domain/useCases/load-user"

export interface LoadUserByEmail{
  findByEmail:(data: LoadUserByEmail.Params) => Promise<LoadUserByEmail.Result>
}

export namespace LoadUserByEmail{
  export type Params = loadUser.Params
  export type Result = boolean
}