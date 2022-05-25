import { ClassesMongoRepository } from "@/infra/db"
import { LoadClass } from "@/domain"
import { DbLoadClass } from "@/data/useCases"

export const makeDbLoadClasses = (): LoadClass => {
  const classesMongoRepository = new ClassesMongoRepository()
  return new DbLoadClass(classesMongoRepository)
}