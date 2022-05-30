import { UserModel } from "../models"

export interface updateUser {
    update: (userDate: UserModel) => Promise<void>
}

export namespace updateUser{
    export type Params = UserModel
    
}