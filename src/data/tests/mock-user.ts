import { UserModel } from "@/domain/models"

export const mockUser = (): UserModel => ({ 
  id:'1', email:'dbzz@gmail.com', password:'123' 
})

export const mockUserNull = (): UserModel => (null)

export const mockUserEmailinUse = (): UserModel => ({ 
  id:'1', email:'dbzz@gmail.com', password:'123' 
})
