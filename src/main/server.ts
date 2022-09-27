import 'module-alias/register'
import { MongoHelper } from "@/infra/db"

MongoHelper.connect(process.env.MONGODBURL)
    .then(
      async() => {
        const { setupApp } = await import('./config/app')
        const app = await setupApp()
        app.listen(process.env.PORT || 3333, () => console.log(`server running in port 9999`))
      }
    )
    .catch(console.error)