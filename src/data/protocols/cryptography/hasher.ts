export interface hash{
  hash: (plaintext:string) => Promise<string>
}