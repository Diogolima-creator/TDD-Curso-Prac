import { GetProfileUser } from "@/domain/useCases/get-profile-user"
import { GetProfileUserRepository } from "../protocols"


export class DbGetProfileUser implements GetProfileUser {
  constructor(private readonly getProfileUserRepository: GetProfileUserRepository){}

  async get (userDateID: string): Promise<GetProfileUser.Result> {
    return this.getProfileUserRepository.getProfile(userDateID)
  }
}

