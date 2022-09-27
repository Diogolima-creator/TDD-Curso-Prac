import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { Controller } from '@/presentation/protocols'
import { UserUpdateController } from '@/presentation/controllers'
import { makeUserUpdateValidation } from './update-user-validation-factory'
import { makeDbUpdateLastClassUser } from '@/main/factories/usecases'

export const makeUserLastClassUpdateController = (): Controller => {
  const controller = new UserUpdateController(makeDbUpdateLastClassUser(), makeUserUpdateValidation())
  return makeLogControllerDecorator(controller)
}