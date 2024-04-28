import Elysia from "elysia";
import { databaseHandler } from "../handlers/database/database_handlers";

export const databaseRouter = new Elysia({ prefix: "/database" });

databaseRouter.get("/:type", databaseHandler);
