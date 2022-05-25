import { ClassModel } from "../models"

export interface loadClass {
  load?: (classDate: ClassModel) => Promise<loadClass.Result>
}

export namespace loadClass{
  export type Params = ClassModel
  export type Result = ClassModel
}