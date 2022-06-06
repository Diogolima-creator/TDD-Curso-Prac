import { Controller, HttpResponse, Validation } from '@/presentation/protocols';
import { noContent, serverError, ok, badRequest } from '@/presentation/helpers'
import { UpdateProfile } from '@/domain'
import { UserModel } from '@/domain/models';

export class UserUpdateController implements Controller {
  constructor (
    private readonly update: UpdateProfile,
    private readonly validation: Validation
    ){}
  
  async handle (request: UserUpdateController.Request): Promise<HttpResponse> {
    try{
      const error = this.validation.validate(request)
      if(error){
        return badRequest(error)
      }
      const Success = this.update.update(request.content)
      return Success ? ok('Update Com Sucesso!') : noContent()
    }catch(error){
      return serverError(error)
    }
  }
}

export namespace UserUpdateController {
  export type Request = {
    content: UserModel
  }
}