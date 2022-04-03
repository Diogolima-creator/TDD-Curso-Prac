import { UserModel } from "../models"

export interface addUser {
    add?: (userDate: UserModel.Params) => Promise<UserModel.Result>
}

