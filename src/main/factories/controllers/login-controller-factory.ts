import { makeLoginValidation, makeLogControllerDecorator } from '@/main/factories'
import { makeDbAuthentication } from '@/main/factories/useCases'
import { Controller } from '@/presentation/protocols'
import { LoginController } from '@/presentation/controllers'

export const makeLoginController = (): Controller => {
  const controller = new LoginController(makeDbAuthentication(), makeLoginValidation())
  return makeLogControllerDecorator(controller)
}