import { LoadClass } from "@/domain/useCases/load-classes"
import { LoadClassByTypeRepository } from "@/data/protocols"


export class DbLoadClass implements LoadClass {
  constructor(private readonly loadClassByTypeRepository: LoadClassByTypeRepository){}

  async load (typeClass: string): Promise<LoadClass.Result> {
    return this.loadClassByTypeRepository.findByType(typeClass)
  }
}