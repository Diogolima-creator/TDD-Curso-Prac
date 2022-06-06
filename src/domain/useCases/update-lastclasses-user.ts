import { UserModel } from "../models"

export interface UpdateLastClassUser {
    update: (userDate: UserModel) => Promise<void>
}

export namespace UpdateLastClassUser{
    export type Params = UserModel   
}