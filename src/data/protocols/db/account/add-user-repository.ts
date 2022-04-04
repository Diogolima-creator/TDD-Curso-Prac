import { addUser } from "@/domain";

export interface AddUserRepository {
  add: (data:AddUserRepository.Params) => Promise<AddUserRepository.Result>
}

export namespace AddUserRepository{
  export type Params = addUser.Params
  export type Result = boolean
}