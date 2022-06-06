import { makeLogControllerDecorator, makeDbUpdateClassUser } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { UserUpdateController } from '@/presentation/controllers'
import { makeUserUpdateValidation } from './update-user-validation-factory'

export const makeUserClassUpdateController = (): Controller => {
  const controller = new UserUpdateController(makeDbUpdateClassUser(), makeUserUpdateValidation())
  return makeLogControllerDecorator(controller)
}