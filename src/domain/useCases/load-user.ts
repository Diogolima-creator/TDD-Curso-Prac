import { UserModel } from "../models"

export interface loadUser {
    auth?: (userDate: UserModel.Params) => Promise<UserModel.Result>
}

