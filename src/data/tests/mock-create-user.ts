import { addUser } from "@/domain/useCases/add-user"

export const mockUserCreate = (): addUser.Params => ({ email:'dbzz@gmail.com', password:'123' })

export const mockUserCreateNull = (): addUser.Params => (null)

export const mockUserEmailinUse = (): addUser.Params => ({ email:'dbz@gmail.com', password:'123' })
