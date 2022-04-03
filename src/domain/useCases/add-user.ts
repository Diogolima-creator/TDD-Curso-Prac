import { UserModel } from "../models"

export interface addUser {
    add?: (userDate: UserModel) => Promise<addUser.Result>
}

export namespace addUser{
    export type Params = UserModel
    export type Result = Boolean
}