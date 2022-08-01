import { GetPost } from "@/domain"
import { GetPostRepository } from "../protocols"


export class DbGetProfileUser implements GetPost {
  constructor(private readonly getPostRepository: GetPostRepository){}

  async getAll (): Promise<GetPost.Result> {
    return this.getPostRepository.getAll()
  }
}

