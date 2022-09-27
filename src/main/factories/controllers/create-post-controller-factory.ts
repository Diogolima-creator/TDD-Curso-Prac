import { makeLogControllerDecorator } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { PostCreateController } from '@/presentation/controllers'
import { makeDbCreatePost } from '@/main/factories/usecases'

export const makeCreatePostController = (): Controller => {
  const controller = new PostCreateController(makeDbCreatePost())
  return makeLogControllerDecorator(controller)
}