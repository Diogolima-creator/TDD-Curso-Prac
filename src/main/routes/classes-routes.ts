import { adaptRoute } from "@/main/adapters"
import { makeLoadClassesController } from "@/main/factories"
import { auth } from "@/main/middlewares"

import { Router } from "express"

export default (router: Router): void => {
  router.get('/getClasses', auth, adaptRoute(makeLoadClassesController()))
}