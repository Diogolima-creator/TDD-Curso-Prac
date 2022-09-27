import { makeLogControllerDecorator } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { PostGetController } from '@/presentation/controllers'
import { makeDbGetPost } from '@/main/factories/usecases'

export const makeGetPostController = (): Controller => {
  const controller = new PostGetController(makeDbGetPost())
  return makeLogControllerDecorator(controller)
}