import { UserModel } from "../models"

export interface UpdateClassUser {
    update: (userDate: UserModel) => Promise<void>
}

export namespace UpdateClassUser{
    export type Params = UserModel   
}