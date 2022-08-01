import { Controller, HttpResponse } from '@/presentation/protocols'
import { serverError, ok } from '@/presentation/helpers'
import { CreatePost } from '@/domain'

export class PostCreateController implements Controller {
  constructor(
    private readonly createPost: CreatePost
  ){}

  async handle(request: CreatePostController.Request): Promise<HttpResponse>{
    try{
      const postModel = await this.createPost.create(request)
      return ok(postModel)
    } catch(error){
      return serverError(error)
    }
  }
}

export namespace CreatePostController {
  export type Request = CreatePost.Params
}