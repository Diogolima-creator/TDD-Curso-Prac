import { makeLogControllerDecorator } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { PostRemoveLikeController } from '@/presentation/controllers'
import { makeDbRemoveLikePost } from '@/main/factories/usecases'

export const makeRemoveLikePostController = (): Controller => {
  const controller = new PostRemoveLikeController(makeDbRemoveLikePost())
  return makeLogControllerDecorator(controller)
}