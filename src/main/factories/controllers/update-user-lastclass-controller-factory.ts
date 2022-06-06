import { makeLogControllerDecorator, makeDbUpdateLastClassUser } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { UserUpdateController } from '@/presentation/controllers'
import { makeUserUpdateValidation } from './update-user-validation-factory'

export const makeUserLastClassUpdateController = (): Controller => {
  const controller = new UserUpdateController(makeDbUpdateLastClassUser(), makeUserUpdateValidation())
  return makeLogControllerDecorator(controller)
}