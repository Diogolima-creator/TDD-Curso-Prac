import { MongoHelper } from "./mongo-helper"
import { LoadClassByTypeRepository } from "@/data/protocols"

export class ClassesMongoRepository implements LoadClassByTypeRepository {

  async findByType(data: string): Promise<LoadClassByTypeRepository.Result> {
    const classesCollection = MongoHelper.getCollection('classes')
    const classes = await classesCollection.findOne({
      Type: data
    })
    return classes && MongoHelper.map(classes)
  }
}