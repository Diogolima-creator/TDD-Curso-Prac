import { loadUser } from "../useCases/load-user"

export const mockUser = (): loadUser.Params => ({
  email: 'dbz@gmail.com',
  password: '123'
})