import { GetPost } from "@/domain"
import { GetPostRepository } from "../protocols"


export class DbGetPost implements GetPost {
  constructor(private readonly getPostRepository: GetPostRepository){}

  async getAll (): Promise<GetPost.Result> {
    const posts:GetPost.Result["posts"] = await this.getPostRepository.getAll()
    return { posts, status: 'ok'}
  }
}

