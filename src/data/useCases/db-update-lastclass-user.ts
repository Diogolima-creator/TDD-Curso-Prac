import { updateLastClassUser } from "@/domain/useCases/update-lastclasses-user"
import { UpdateLastClassUserRepository } from "@/data/protocols"
import { UserModel } from "@/domain/models"


export class DbUpdateLastClassUser implements updateLastClassUser {
  constructor(private readonly updateLastClassUserRepository: UpdateLastClassUserRepository){}

  async update (updateDate: UserModel): Promise<void> {
    return this.updateLastClassUserRepository.updateLastClass(updateDate.id, updateDate.LastClasses[0], updateDate.LastClasses[1])
  }
}