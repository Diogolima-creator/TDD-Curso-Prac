import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { badRequest, serverError, unauthorized, ok } from '@/presentation/helpers'
import { loadUser } from '@/domain'

export class LoginController implements Controller {
  constructor(
    private readonly loaduser: loadUser,
    private readonly validation: Validation
  ){}

  async handle(request: LoginController.Request): Promise<HttpResponse>{
    try{
      const error = this.validation.validate(request)
      if(error){
        return badRequest(error)
      }
      const authenticationModel = await this.loaduser.auth(request)
      if (!authenticationModel){
        return unauthorized()
      }
      return ok(authenticationModel)
    } catch(error){
      return serverError(error)
    }
  }
}

export namespace LoginController {
  export type Request = {
    username:string
    email: string
    password: string
  }
}