import { loadUser } from "@/domain/useCases/load-user"

export const mockUserAuth = (): loadUser.Params => ({ email:'dbz@gmail.com', password:'123' })

export const mockUserEmailWrong = (): loadUser.Params => ({ email:'dbzz@gmail.com', password:'123' })

export const mockUserPassWrong = (): loadUser.Params => ({ email:'dbz@gmail.com', password:'1234' })



