import { Controller, HttpResponse, Validation } from '@/presentation'
import { badRequest, serverError, ok, forbidden } from '@/presentation/helpers'
import { EmailInUseError } from '@/presentation/errors'
import { addUser, loadUser } from '@/domain'

export class SignUpController implements Controller {
  constructor(
    private readonly addUser: addUser,
    private readonly validation: Validation,
    private readonly authentication: loadUser
  ){}

  async handle (request: SignUpController.Request): Promise<HttpResponse> {
    try{ 
      const error = this.validation.validate(request)
      if (error){
        return badRequest(error)
      }
      const { email, password } = request
      const isValid = await this.addUser.add({
        email,
        password
      })
      if (!isValid){
        return forbidden(new EmailInUseError())
      }
      const authenticationModel = await this.authentication.auth({
        email,
        password
      })
      return ok(authenticationModel)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace SignUpController{
  export type Request = {
    email: string
    password: string
    passwordConfirmation: string
  }
}

