import { UserModel } from "../models"

export interface updateUser {
    update?: (userDate: UserModel) => Promise<void>
}

export namespace loadUser{
    export type Params = UserModel
    
}