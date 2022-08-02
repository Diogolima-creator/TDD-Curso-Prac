import { Controller, HttpResponse } from '@/presentation/protocols'
import { serverError, ok, noContent } from '@/presentation/helpers'
import { CreatePost } from '@/domain'

export class PostCreateController implements Controller {
  constructor(
    private readonly createPost: CreatePost
  ){}

  async handle(request: CreatePostController.Request): Promise<HttpResponse>{
    try{
      const postModel = await this.createPost.create(request)
      return postModel === true ? ok(postModel) : noContent()
    } catch(error){
      return serverError(error)
    }
  }
}

export namespace CreatePostController {
  export type Request = CreatePost.Params
}