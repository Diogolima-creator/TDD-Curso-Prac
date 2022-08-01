import { MongoHelper } from "./mongo-helper"
import { CreatePostRepository,GetPostRepository } from "@/data/protocols"

export class PostsMongoRepository implements CreatePostRepository,GetPostRepository {

  async getAll(): Promise<GetPostRepository.Result> {
    const postsCollection = MongoHelper.getCollection('posts')
    return postsCollection && MongoHelper.map(postsCollection)
  }

  async add(data: CreatePostRepository.Params): Promise<CreatePostRepository.Result> {
    const postsCollection = MongoHelper.getCollection('posts')
    const result = await postsCollection.insertOne(data)
    return result !== null 
  }
}