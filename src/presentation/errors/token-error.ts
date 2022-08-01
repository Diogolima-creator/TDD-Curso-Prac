export class TokenError extends Error {
  constructor () {
    super('Token error')
    this.name = 'TokenError'
  }
}
