import { loadUser } from "@/domain/useCases/load-user"

export interface CreateUserRepository{
  add:(data: CreateUserRepository.Params) => Promise<CreateUserRepository.Result>
}

export namespace CreateUserRepository{
  export type Params = loadUser.Params
  export type Result = boolean
}