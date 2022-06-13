import { UpdateLastClassUser } from "@/domain/useCases/update-lastclasses-user"
import { UpdateLastClassUserRepository } from "@/data/protocols"



export class DbUpdateLastClassUser implements UpdateLastClassUser {
  constructor(private readonly updateLastClassUserRepository: UpdateLastClassUserRepository){}

  async update (updateDate: DbUpdateLastClassUser.Params): Promise<void> {
    return this.updateLastClassUserRepository.updateLastClass(updateDate.id, updateDate.LastClasses[0], updateDate.LastClasses[1])
  }
}

export namespace DbUpdateLastClassUser {
  export type Params = {
      id: string,
      LastClasses: [number, number]
  }
}