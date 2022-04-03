import { addUser } from "@/domain/useCases/add-user"

export interface CreateUserRepository{
  add:(data: CreateUserRepository.Params)
}

export namespace CreateUserRepository{
  export type Params = addUser.Params
  export type Result = boolean
}