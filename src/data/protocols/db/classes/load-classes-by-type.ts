import { loadClass } from "@/domain/useCases/load-classes"

export interface LoadClassByTypeRepository{
  findByType:(data: string) => Promise<LoadClassByTypeRepository.Result>
}

export namespace LoadClassByTypeRepository{
  export type Result = loadClass.Params
}