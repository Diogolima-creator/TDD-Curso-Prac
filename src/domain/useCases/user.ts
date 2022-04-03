import { UserModel } from "../models"

export interface User {
    findbyEmail?: (userDate: UserModel["email"]) => Promise<UserModel>
    create?: (userDate: UserModel) => Promise<UserModel>
    auth?: (userDate: UserModel) => Promise<UserModel>
}

