import { Controller, HttpResponse } from '@/presentation/protocols'
import { noContent, serverError, ok } from '@/presentation/helpers'
import { LoadClass } from '@/domain'

export class LoadClassesController implements Controller {
  constructor (private readonly loadClass: LoadClass){}

  async handle (request: LoadClassesController.Request): Promise<HttpResponse> {
    try{
      const classes = await this.loadClass.load(request.accountId)
      return classes.Modules ? ok(classes) : noContent()
    }catch(error){
      return serverError(error)
    }
  }
}

export namespace LoadClassesController {
  export type Request = {
    accountId: string
  }
}