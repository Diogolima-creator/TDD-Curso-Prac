import { HttpResponse } from '@/presentation/protocols'

export interface Middleware<T = any>{
  handle: (httpResponse: T) => Promise<HttpResponse>
}