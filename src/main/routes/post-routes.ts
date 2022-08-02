import { adaptRoute } from "@/main/adapters"
import { makeCreatePostController, makeGetPostController, makeAddCommentPostController, makeAddLikePostController, makeRemoveLikePostController } from "@/main/factories"
import { auth } from "@/main/middlewares"

import { Router } from "express"

export default (router: Router): void => {
  router.post('/createPost', auth, adaptRoute(makeCreatePostController()))
  router.get('/getPost', auth, adaptRoute(makeGetPostController()))
  router.put('/addComment', auth, adaptRoute(makeAddCommentPostController()))
  router.put('/addLike', auth, adaptRoute(makeAddLikePostController()))
  router.put('/removeLike', auth, adaptRoute(makeRemoveLikePostController()))
}