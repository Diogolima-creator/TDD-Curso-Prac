import { UserModel } from "../models"

export interface updateProfile {
    update: (userDate: UserModel) => Promise<void>
}

export namespace updateProfile{
    export type Params = UserModel
    
}