import { HashComparer, Encrypter, Hasher, Decrypter } from "@/data/protocols";

/*    
private readonly updateAccessTokenRepository: UpdateAccessTokenRepository */

export class HashComparerSpy implements HashComparer {
  plaintext: string
  digest: string
  isValid = true

  async compare (plaintext: string, digest: string): Promise<boolean> {
    this.plaintext = plaintext
    this.digest = digest
    return this.isValid
  }
}

export class EncrypterSpy implements Encrypter {
  ciphertext = 'uuid'
  plaintext: string

  async encrypt (plaintext: string): Promise<string> {
    this.plaintext = plaintext
    return this.ciphertext
  }
}

export class HasherSpy implements Hasher {
  digest = 'password'
  plaintext: string

  async hash (plaintext: string): Promise<string> {
    this.plaintext = plaintext
    return this.digest
  }
}

export class DecrypterSpy implements Decrypter {
  plaintext = 'password'
  ciphertext: string

  async decrypt (ciphertext: string): Promise<string> {
    this.ciphertext = ciphertext
    return this.plaintext
  }
}