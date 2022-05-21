import { Controller, HttpResponse, Validation } from '@/presentation'
import { badRequest, serverError, ok, forbidden } from '@/presentation/helpers'
import { EmailOrUserNameInUseError } from '@/presentation/errors'
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
      const { email, password, username } = request
      const isValid = await this.addUser.add({
        email,
        password,
        username,
        description: '',
        profilePic: '',
        level: '',
        classes: ['1.JSTutorial','Statements','9fhKtle7Ivg'],
        LastClasses: [0,-1],
        createdAt: new Date(Date.now()).toDateString()
      })
      if (!isValid){
        return forbidden(new EmailOrUserNameInUseError())
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
    username: string
    email: string
    password: string
    passwordConfirmation: string
  }
}

