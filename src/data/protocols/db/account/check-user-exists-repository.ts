import { loadUser } from "@/domain"

export interface CheckUserExistsRepository {
    checkByEmail:(data:string) => Promise<CheckUserExistsRepository.Result>
}

export namespace CheckUserExistsRepository{
  export type Result = boolean
}