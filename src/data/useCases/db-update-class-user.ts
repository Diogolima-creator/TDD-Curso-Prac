import { UpdateClassUser } from "@/domain/useCases/update-class-user"
import { UpdateClassUserRepository } from "@/data/protocols"
import { UserModel } from "@/domain/models"


export class DbUpdateClassUser implements UpdateClassUser {
  constructor(private readonly updateClassUserRepository: UpdateClassUserRepository){}

  async update (updateDate: UserModel): Promise<void> {
    return this.updateClassUserRepository.updateClass(updateDate.id,updateDate.classes[0],updateDate.classes[1], updateDate.classes[2])
  }
}