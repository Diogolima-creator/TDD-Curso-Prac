import { GetProfileUser } from "@/domain/useCases/get-profile-user"
import { GetProfileUserRepository } from "../protocols"
import { UserModel } from '@/domain/models';

export class DbGetProfileUser implements GetProfileUser {
  constructor(private readonly getProfileUserRepository: GetProfileUserRepository){}

  async get (userDate: GetProfileUser.Params): Promise<GetProfileUser.Result> {
    return this.getProfileUserRepository.getProfile(userDate.id)
  }
}

