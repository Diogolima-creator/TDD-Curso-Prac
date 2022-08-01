import { Middleware, HttpResponse } from '@/presentation/protocols'
import { forbidden, ok, serverError, unauthorized } from '@/presentation/helpers'
import { TokenError, TokenInvalidError, TokenMalFormattedError } from '@/presentation/errors'
import { LoadAccountByToken } from '@/domain'

export class AuthMiddleware implements Middleware {
  constructor(
    private readonly loadAccountByToken: LoadAccountByToken,
    private readonly role?: string
  ){}

  async handle (request: AuthMiddleware.Request): Promise<HttpResponse> {
    try{
      const { accessToken } = request

      const parts = accessToken.split(' ')

      if(parts.length !== 2){
        return forbidden(new TokenError())
      }

      const [ scheme, token] = parts;

      if(!/^Bearer$/i.test(scheme)){
        return forbidden(new TokenMalFormattedError())
      }

      if(token){
        const account = await this.loadAccountByToken.load(token, this.role)
        if(account){
          return ok({ accountId: account.id })
        }
      }
      return forbidden(new TokenInvalidError())
    } catch(error){
      return serverError(error)
    }
  }
}

export namespace AuthMiddleware {
  export type Request = {
    accessToken?: string
  }
}