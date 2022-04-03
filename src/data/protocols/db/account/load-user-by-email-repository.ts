import { loadUser } from "@/domain/useCases/load-user"

export interface LoadUserByEmailRepository{
  findByEmail:(data: LoadUserByEmailRepository.Params["email"]) => Promise<LoadUserByEmailRepository.Params>
}

export namespace LoadUserByEmailRepository{
  export type Params = loadUser.Params
}