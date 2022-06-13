import { UpdateProfile } from "@/domain/useCases/update-profile-user"
import { UpdateProfileRepository } from "@/data/protocols"
import { UserModel } from "@/domain/models"


export class DbUpdateProfile implements UpdateProfile {
  constructor(private readonly updateProfileRepository: UpdateProfileRepository){}

  async update (updateDate: UpdateProfile.Params): Promise<void> {
    return this.updateProfileRepository.updateProfile(updateDate.id,updateDate.description,updateDate.profilePic)
  }
}

