import { UserModel } from "../models"

export interface loadUser {
    auth?: (userDate: UserModel) => Promise<UserModel>
}

