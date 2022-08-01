import { CreatePost } from "@/domain/useCases/create-post";
import { CreatePostRepository } from "@/data/protocols";

export class DbCreatePost implements CreatePost{
  constructor(private readonly createPostRepository: CreatePostRepository){}

  async create(post: CreatePost.Params): Promise<CreatePost.Result> {
   let isValid =  this.createPostRepository.add(post)
   return isValid
  }
}