import { LoadClass } from "@/domain/useCases/load-classes"

export interface LoadClassByTypeRepository{
  findByType:(data: string) => Promise<LoadClassByTypeRepository.Result>
}

export namespace LoadClassByTypeRepository{
  export type Result = LoadClass.Params
}