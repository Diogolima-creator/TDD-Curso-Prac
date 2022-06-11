import { UpdateClassUser } from "@/domain/useCases/update-class-user"
import { UpdateClassUserRepository } from "@/data/protocols"



export class DbUpdateClassUser implements UpdateClassUser {
  constructor(private readonly updateClassUserRepository: UpdateClassUserRepository){}

  async update (updateDate: DbUpdateClassUser.Params): Promise<void> {
    return this.updateClassUserRepository.updateClass(updateDate.id,updateDate.classes[0],updateDate.classes[1], updateDate.classes[2])
  }
}


export namespace DbUpdateClassUser {
  export type Params = {
      id: string,
      classes: [string, string, string]
  }
}