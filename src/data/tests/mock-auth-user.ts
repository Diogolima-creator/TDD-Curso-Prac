import { UserModel } from "@/domain/models"

export const mockUserAuth = (): UserModel.Params => ({ email:'dbz@gmail.com', password:'123' })

export const mockUserEmailWrong = (): UserModel.Params => ({ email:'dbzz@gmail.com', password:'123' })

export const mockUserPassWrong = (): UserModel.Params => ({ email:'dbz@gmail.com', password:'1234' })



