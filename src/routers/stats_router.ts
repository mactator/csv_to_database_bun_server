import Elysia from "elysia";
import { statsHandler } from "../handlers/status_handlers/stats_handler";

export const statsRouter = new Elysia({ prefix: "/stats" });

statsRouter.get("/", statsHandler);
