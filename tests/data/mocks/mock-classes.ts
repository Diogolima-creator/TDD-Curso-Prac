import { LoadClassByTypeRepository, UpdateClassUserRepository } from "@/data/protocols"
import { ClassModel } from "@/domain/models"

export class LoadClassByTypeRepositorySpy implements LoadClassByTypeRepository{
  data: string
  result: ClassModel

  async findByType (data: string): Promise<ClassModel>{
    this.data = data
    return this.result
  }
}

export class UpdateClassUserRepositorySpy implements UpdateClassUserRepository {
  id:string
  Module: string
  Class: string
  urlVideo: string
  
  async updateClass (id: string, Module: string, Class: string, urlVideo: string): Promise<void>{
    this.id = id
    this.Module = Module
    this.Class = Class
    this.urlVideo = urlVideo
  }
}