import { UserModel } from "../models"

export interface addUser {
    add?: (userDate: UserModel) => Promise<UserModel>
}

