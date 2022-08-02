import { adaptRoute } from "@/main/adapters"
import { makeUserGetProfileController,makeProfileUpdateController, makeUserLastClassUpdateController, makeUserClassUpdateController } from '@/main/factories'
import { auth } from "@/main/middlewares"
import { Router } from "express"

export default (router: Router): void => {
  router.put('/updateProfile', auth, adaptRoute(makeProfileUpdateController()))
  router.put('/updateClass', auth , adaptRoute(makeUserClassUpdateController()))
  router.put('/updateLastClass', auth ,adaptRoute(makeUserLastClassUpdateController()))
  router.post('/getProfile', auth, adaptRoute(makeUserGetProfileController()))
}
