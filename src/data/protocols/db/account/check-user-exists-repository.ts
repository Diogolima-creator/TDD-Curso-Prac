
export interface CheckUserExistsRepository {
    checkByEmail:(data:string) => Promise<CheckUserExistsRepository.Result>
    checkByUser:(data:string) => Promise<CheckUserExistsRepository.Result>
}

export namespace CheckUserExistsRepository{
  export type Result = boolean
}