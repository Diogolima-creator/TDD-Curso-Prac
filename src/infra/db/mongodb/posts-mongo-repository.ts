import { MongoHelper } from "./mongo-helper"
import { CreatePostRepository,GetPostRepository, AddCommentRepository, AddLikeRepository, RemoveLikeRepository } from "@/data/protocols"
import { CommentModel, LikeModel } from "@/domain/models"
import { ObjectId } from "mongodb"

export class PostsMongoRepository implements CreatePostRepository,GetPostRepository, AddCommentRepository, AddLikeRepository, RemoveLikeRepository{

  async getAll(): Promise<GetPostRepository.Result> {
    const postsCollection = MongoHelper.getCollection('posts')
    const posts = await postsCollection.find().toArray()
    return MongoHelper.mapCollection(posts)
  }

  async add(data: CreatePostRepository.Params): Promise<CreatePostRepository.Result> {
    const postsCollection = MongoHelper.getCollection('posts')
    const result = await postsCollection.insertOne(data)
    return result !== null 
  }

  async addComment(comment: CommentModel): Promise<void>{
    const postsCollection = MongoHelper.getCollection('posts')
    await postsCollection.updateOne({
      _id: new ObjectId(comment.id)
    }, {
      $push: {
        Comments:[comment.profilePic,comment.comment, comment.username, comment.level]
      }
    })
  }

  async addLike(likeId: LikeModel): Promise<Boolean>{
    const postsCollection = MongoHelper.getCollection('posts')
    const post = await postsCollection.findOne({ _id: new ObjectId(likeId.idPost) })
    
    if((post.Likes.filter((item:string) => item === likeId.idUser)).length !== 0 ){
      return false
    }

    await postsCollection.updateOne({
      _id: new ObjectId(likeId.idPost)
    }, {
      $push: {
        Likes: likeId.idUser
      }
    })
    return true
  }
  
  async removeLike(likeId: LikeModel): Promise<Boolean>{
    const postsCollection = MongoHelper.getCollection('posts')
    const post = await postsCollection.findOne({ _id: new ObjectId(likeId.idPost) })
    
    if((post.Likes.filter((item:string) => item === likeId.idUser)).length === 0 ){
      return false
    }

    await postsCollection.updateOne({
      _id: new ObjectId(likeId.idPost)
    }, {
      $pull: {
        Likes: likeId.idUser
      }
    })
    return true
  }
}