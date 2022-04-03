import { UserModel } from "../models"

export interface User {
    create: (userDate: UserModel) => Promise<UserModel>
}

