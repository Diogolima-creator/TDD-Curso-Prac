export class TokenMalFormattedError extends Error {
  constructor () {
    super('Token malformatted')
    this.name = 'TokenMalFormattedError'
  }
}
