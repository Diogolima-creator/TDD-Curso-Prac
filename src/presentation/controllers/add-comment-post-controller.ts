import { Controller, HttpResponse } from '@/presentation/protocols'
import { serverError, ok, noContent } from '@/presentation/helpers'
import { AddComment } from '@/domain'

export class PostAddCommentController implements Controller {
  constructor(
    private readonly addComment: AddComment
  ){}

  async handle(request: PostAddCommentController.Request): Promise<HttpResponse>{
    try{
      const addCommentResult = await this.addComment.add(request)
      return ok(addCommentResult)
    } catch(error){
      return serverError(error)
    }
  }
}

export namespace PostAddCommentController {
  export type Request = AddComment.Params
}