import { makeLogControllerDecorator, makeDbUpdateClassUser } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { UserGetProfileController } from '@/presentation/controllers'
import { makeDbGetProfileUser } from '@/main/factories'
import { makeUserGetValidation } from '@/main/factories'

export const makeUserGetProfileController = (): Controller => {
  const controller = new UserGetProfileController(makeDbGetProfileUser(), makeUserGetValidation())
  return makeLogControllerDecorator(controller)
}