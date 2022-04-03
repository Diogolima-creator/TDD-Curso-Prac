import { UserModel } from "@/domain/models"

export const mockUserCreate = (): UserModel.Params => ({ email:'dbzz@gmail.com', password:'123' })

export const mockUserCreateNull = (): UserModel.Params => (null)

export const mockUserEmailinUse = (): UserModel.Params => ({ email:'dbz@gmail.com', password:'123' })
