import { ClassModel } from "../models"

export interface LoadClass {
  load?: (classDate: string) => Promise<LoadClass.Result>
}

export namespace LoadClass{
  export type Params = ClassModel
  export type Result = ClassModel
}