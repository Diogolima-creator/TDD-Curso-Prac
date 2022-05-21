export class EmailOrUserNameInUseError extends Error {
  constructor () {
    super('The received email/username is already in use')
    this.name = 'EmailOrUserNameInUseError'
  }
}
