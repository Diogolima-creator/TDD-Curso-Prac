import { makeSignUpValidation, makeLogControllerDecorator } from '@/main/factories'
import { SignUpController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'
import { makeDbAuthentication, makeDbAddAccount } from '@/main/factories/usecases'

export const makeSignUpController = (): Controller => {
  const controller = new SignUpController(makeDbAddAccount(), makeSignUpValidation(), makeDbAuthentication())
  return makeLogControllerDecorator(controller)
}