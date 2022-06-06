import { UserModel } from "../models"

export interface UpdateProfile {
    update: (userDate: UserModel) => Promise<void>
}

export namespace UpdateProfile{
    export type Params = UserModel
    
}