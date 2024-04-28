import Elysia from "elysia";
import { uploadRouter } from "./files_router";
import { statsRouter } from "./stats_router";
import { databaseRouter } from "./database_router";
import staticPlugin from "@elysiajs/static";

export const mainRouter = new Elysia();

mainRouter
  .use(
    staticPlugin({
      prefix: "/",
    })
  )
  .use(uploadRouter)
  .use(statsRouter)
  .use(databaseRouter);
