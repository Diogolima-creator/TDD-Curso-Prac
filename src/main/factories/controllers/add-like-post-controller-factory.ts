import { makeLogControllerDecorator } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { PostAddLikeController } from '@/presentation/controllers'
import { makeDbAddLikePost } from '@/main/factories'

export const makeAddLikePostController = (): Controller => {
  const controller = new PostAddLikeController(makeDbAddLikePost())
  return makeLogControllerDecorator(controller)
}