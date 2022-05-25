import { makeLogControllerDecorator, makeDbLoadClasses } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { LoadClassesController } from '@/presentation/controllers'

export const makeLoadClassesController = (): Controller => {
  const controller = new LoadClassesController(makeDbLoadClasses())
  return makeLogControllerDecorator(controller)
}