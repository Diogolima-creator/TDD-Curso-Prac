import { UserModel } from "../models"

export interface updateLastClassUser {
    update: (userDate: UserModel) => Promise<void>
}

export namespace updateLastClassUser{
    export type Params = UserModel   
}