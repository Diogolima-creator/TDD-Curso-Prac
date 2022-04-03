import { UserModel } from "../models"

export interface User {
    createUser: (userDate: UserModel) => Promise<UserModel>
}

