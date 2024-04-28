import type { ErrorHandler, MergeSchema, RouteSchema } from "elysia";
import { CustomError } from "../../errors/errors";

export const errorHandler: ErrorHandler<
  {},
  MergeSchema<RouteSchema, {}>
> = async ({ error }) => {
  if (error instanceof CustomError) {
    return new Response(error.message, { status: error.statusCode });
  } else {
    return new Response(error.message, { status: 500 });
  }
};
