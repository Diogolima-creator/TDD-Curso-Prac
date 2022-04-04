import { addUser } from "@/domain";

export interface addUserRepository {
  add: (data:addUserRepository.Params) => Promise<addUserRepository.Result>
}

export namespace addUserRepository{
  export type Params = addUser.Params
  export type Result = boolean
}