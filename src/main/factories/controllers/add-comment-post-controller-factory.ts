import { makeLogControllerDecorator } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { PostAddCommentController } from '@/presentation/controllers'
import { makeDbAddCommentPost } from '@/main/factories'

export const makeAddCommentPostController = (): Controller => {
  const controller = new PostAddCommentController(makeDbAddCommentPost())
  return makeLogControllerDecorator(controller)
}