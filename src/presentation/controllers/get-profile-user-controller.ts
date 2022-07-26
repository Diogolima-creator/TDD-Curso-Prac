import { Controller, HttpResponse } from '@/presentation/protocols'
import { noContent, serverError, ok } from '@/presentation/helpers'
import { GetProfileUser } from '@/domain'

export class UserGetProfileController implements Controller {
  constructor (private readonly getProfileUser: GetProfileUser){}

  async handle (request: UserGetProfileController.Request): Promise<HttpResponse> {
    try{
      const userProfile = await this.getProfileUser.get(request.id)
      return userProfile.username ? ok(userProfile) : noContent()
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