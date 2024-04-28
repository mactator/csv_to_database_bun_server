import Elysia from "elysia";
import { uploadFileHandler } from "../handlers/upload_files/upload_file_handler";

export const uploadRouter = new Elysia({ prefix: "/upload" });

uploadRouter.post("/", uploadFileHandler);
