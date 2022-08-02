import { Controller, HttpResponse } from '@/presentation/protocols'
import { serverError, ok, noContent } from '@/presentation/helpers'
import { RemoveLike } from '@/domain'

export class PostRemoveLikeController implements Controller {
  constructor(
    private readonly removeLike: RemoveLike
  ){}

  async handle(request: PostRemoveLikeController.Request): Promise<HttpResponse>{
    try{
      const removeLikeResult = await this.removeLike.remove(request)
      return removeLikeResult === true ? ok(removeLikeResult) : noContent()
    } catch(error){
      return serverError(error)
    }
  }
}

export namespace PostRemoveLikeController {
  export type Request = RemoveLike.Params
}