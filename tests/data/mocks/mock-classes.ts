import { LoadClassByTypeRepository } from "@/data/protocols"
import { ClassModel } from "@/domain/models"

export class LoadClassByTypeRepositorySpy implements LoadClassByTypeRepository{
  data: string
  result: ClassModel

  async findByType (data: string): Promise<ClassModel>{
    this.data = data
    return this.result
  }
}

