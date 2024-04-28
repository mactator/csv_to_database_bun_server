import { Elysia } from "elysia";
import { mainRouter } from "./routers/main_router";
import { errorHandler } from "./handlers/errors/error_handler";

// create your app
const app = new Elysia();

app
  .onError(errorHandler)
  .use(mainRouter)
  .listen(3000, (ser) => {
    console.log(`Server running on http://localhost:${ser.port}`);
  });
