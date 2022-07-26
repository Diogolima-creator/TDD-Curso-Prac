import { makeLogControllerDecorator, makeDbUpdateClassUser } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { UserUpdateController } from '@/presentation/controllers'
import { makeUserGetValidation } from './update-user-validation-factory'

export const makeUserGetProfileController = (): Controller => {
  const controller = new UserGetProfileController(makeDbUpdateClassUser(), makeUserGetValidation())
  return makeLogControllerDecorator(controller)
}