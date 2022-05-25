import { ClassModel } from "../models"

export interface loadClass {
  load?: (classDate: string) => Promise<loadClass.Result>
}

export namespace loadClass{
  export type Result = ClassModel
}