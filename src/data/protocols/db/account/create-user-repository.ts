import { UserModel } from "@/domain/models"

export interface CreateUserRepository{
  add:(data: CreateUserRepository.Params) => Promise<CreateUserRepository.Result>
}

export namespace CreateUserRepository{
  export type Params = UserModel.Params
  export type Result = boolean
}