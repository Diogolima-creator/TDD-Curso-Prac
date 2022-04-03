import { UserModel } from "@/domain/models"

export const mockUserAuth = (): UserModel => ({ id:'1', email:'dbz@gmail.com', password:'123' })

export const mockUserEmailWrong = (): UserModel => ({ id:'1', email:'dbzz@gmail.com', password:'123' })

export const mockUserPassWrong = (): UserModel => ({ id:'1', email:'dbz@gmail.com', password:'1234' })



