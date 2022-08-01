import { Controller, HttpResponse } from '@/presentation/protocols'
import { noContent, serverError, ok } from '@/presentation/helpers'
import { GetPost } from '@/domain'

export class PostGetController implements Controller {
  constructor (private readonly getPost: GetPost){}

  async handle (): Promise<HttpResponse> {
    try{
      const posts = await this.getPost.getAll()
      return posts.id ? ok(posts) : noContent()
    }catch(error){
      return serverError(error)
    }
  }
}
