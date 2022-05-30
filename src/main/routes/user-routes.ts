import { adaptRoute } from "@/main/adapters"
import { Router } from "express"

export default (router: Router): void => {
  router.post('/updateProfile', adaptRoute())
  router.post('/updateClass', adaptRoute())
  router.post('/updateLastClass', adaptRoute())
}