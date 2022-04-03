import { UserModel } from "../models"

export interface User {
    createUser: (items: UserModel) => Promise<UserModel>
}

