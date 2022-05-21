import 'module-alias/register'
import { MongoHelper } from "@/infra/db"

MongoHelper.connect('mongodb://127.0.0.1:27017/cursoLoginTDD')
    .then(
      async() => {
        const { setupApp } = await import('./config/app')
        const app = await setupApp()
        app.listen(9999, () => console.log(`server running in port 9999`))
      }
    )
    .catch(console.error)