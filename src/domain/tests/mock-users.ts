import { loadUser } from "../useCases/load-user"

export const mockloadUser = (): loadUser.Params => ({
  email: 'dbz@gmail.com',
  password: '123'
})