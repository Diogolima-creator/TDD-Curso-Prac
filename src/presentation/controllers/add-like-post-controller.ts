import { Controller, HttpResponse } from '@/presentation/protocols'
import { serverError, ok, noContent } from '@/presentation/helpers'
import { AddLike } from '@/domain'

export class PostAddLikeController implements Controller {
  constructor(
    private readonly addLike: AddLike
  ){}

  async handle(request: PostAddLikeController.Request): Promise<HttpResponse>{
    try{
      const addLikeResult = await this.addLike.add(request)
      return addLikeResult === true ? ok(addLikeResult) : noContent()
    } catch(error){
      return serverError(error)
    }
  }
}

export namespace PostAddLikeController {
  export type Request = AddLike.Params
}