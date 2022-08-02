import { Controller, HttpResponse } from '@/presentation/protocols'
import { badRequest, noContent, serverError, ok } from '@/presentation/helpers'
import { GetProfileUser } from '@/domain'
import { Validation } from '@/presentation/protocols'

export class UserGetProfileController implements Controller {
  constructor (
  private readonly getProfileUser: GetProfileUser,
  private readonly validation: Validation
  ){}

  async handle (request: UserGetProfileController.Request): Promise<HttpResponse> {
    try{
      const error = this.validation.validate(request)
      if(error){
        return badRequest(error)
      }
      const userProfile = await this.getProfileUser.get(request.id)
      return (await userProfile.profile).username ? ok(userProfile) : noContent()
    }catch(error){
      return serverError(error)
    }
  }
}

export namespace UserGetProfileController {
  export type Request = {
    id: string
  }
}