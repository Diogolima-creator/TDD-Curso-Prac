import { adaptRoute } from "@/main/adapters"
import { makeCreatePostController } from "@/main/factories"
import { makeGetPostController } from "@/main/factories"
import { auth } from "@/main/middlewares"

import { Router } from "express"

export default (router: Router): void => {
  router.post('/createPost', auth, adaptRoute(makeCreatePostController()))
  router.get('/getPost', auth, adaptRoute(makeGetPostController()))
}