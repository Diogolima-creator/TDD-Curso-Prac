import { loadUser } from "@/domain/useCases/load-user"

export interface LoadUserByEmailRepository{
  findByEmail:(data: string) => Promise<LoadUserByEmailRepository.Result>
}

export namespace LoadUserByEmailRepository{
  export type Result = loadUser.Params
}