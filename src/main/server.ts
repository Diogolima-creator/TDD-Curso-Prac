import { MongoHelper } from "@/infra/db";

MongoHelper.connect('mongodb://localhost:27017/cursoLogin')
    .then(
      async() => {
        const { setupApp } = await import('./config/app')
        const app = await setupApp()
        app.listen(9999, () => console.log(`server running in port 9999`))
      }
    )
    .catch(console.error)