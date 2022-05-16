import { makeDbAuthentication, makeLoginController } from '@/main/factories';
import { Controller } from "@/presentation/protocols"
import { LoginController } from "@/presentation/controllers"

export const makeLoginController = (): Controller => {
  const controller = new LoginController(makeDbAuthentication())
}