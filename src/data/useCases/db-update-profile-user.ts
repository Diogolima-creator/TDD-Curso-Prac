import { UpdateProfile } from "@/domain/useCases/update-profile-user"
import { UpdateProfileRepository } from "@/data/protocols"
import { UserModel } from "@/domain/models"


export class DbUpdateProfileClass implements UpdateProfile {
  constructor(private readonly updateProfileRepository: UpdateProfileRepository){}

  async update (updateDate: UserModel): Promise<void> {
    return this.updateProfileRepository.updateProfile(updateDate.id,updateDate.description,updateDate.profilePic)
  }
}