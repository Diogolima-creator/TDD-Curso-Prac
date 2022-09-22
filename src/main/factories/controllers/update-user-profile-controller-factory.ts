import { makeLogControllerDecorator } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { UserUpdateController } from '@/presentation/controllers'
import { makeUserUpdateValidation } from './update-user-validation-factory'
import { makeDbUpdateProfile } from '@/main/factories/useCases'

export const makeProfileUpdateController = (): Controller => {
  const controller = new UserUpdateController(makeDbUpdateProfile(), makeUserUpdateValidation())
  return makeLogControllerDecorator(controller)
}