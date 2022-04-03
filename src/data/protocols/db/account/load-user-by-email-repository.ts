import { loadUser } from "@/domain/useCases/load-user"

export interface LoadUserByEmailRepository{
  findByEmail:(data: LoadUserByEmailRepository.Params) => Promise<LoadUserByEmailRepository.Result>
}

export namespace LoadUserByEmailRepository{
  export type Params = loadUser.Params
  export type Result = boolean
}