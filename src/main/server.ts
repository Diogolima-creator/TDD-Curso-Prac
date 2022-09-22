import 'module-alias/register'
import { MongoHelper } from "@/infra/db"

MongoHelper.connect(process.env.MONGODB_CNSTRING)
    .then(
      async() => {
        const { setupApp } = await import('./config/app')
        const app = await setupApp()
        app.listen(9999, () => console.log(`server running in port 9999`))
      }
    )
    .catch(console.error)