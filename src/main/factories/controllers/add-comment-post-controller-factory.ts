import { makeLogControllerDecorator, makeDbAddCommentPost  } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { PostAddCommentController } from '@/presentation/controllers'

export const makeAddCommentPostController = (): Controller => {
  const controller = new PostAddCommentController(makeDbAddCommentPost())
  return makeLogControllerDecorator(controller)
}