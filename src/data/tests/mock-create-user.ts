import { UserModel } from "@/domain/models"

export const mockUserCreate = (): UserModel => ({ email:'dbzz@gmail.com', password:'123' })

export const mockUserCreateNull = (): UserModel => (null)

export const mockUserEmailinUse = (): UserModel => ({ email:'dbz@gmail.com', password:'123' })
