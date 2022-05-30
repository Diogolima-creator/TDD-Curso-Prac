import { UserModel } from "../models"

export interface updateClassUser {
    update: (userDate: UserModel) => Promise<void>
}

export namespace updateClassUser{
    export type Params = UserModel   
}