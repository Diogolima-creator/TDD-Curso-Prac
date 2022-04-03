import { UserModel } from "@/domain/models"

export const mockUserAuth = (): UserModel => ({ email:'dbz@gmail.com', password:'123' })

export const mockUserEmailWrong = (): UserModel => ({ email:'dbzz@gmail.com', password:'123' })

export const mockUserPassWrong = (): UserModel => ({ email:'dbz@gmail.com', password:'1234' })



