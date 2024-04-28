import type { Handler } from "elysia";
import { prisma } from "../../db/prisma_client";
import { BadRequestError } from "../../errors/errors";

export const databaseHandler: Handler<{
  params: { type: string };
}> = async ({ params }) => {
  let data;
  switch (params.type) {
    case "NewLicense":
      data = await prisma.newLicense.findMany({});
      break;
    case "AccountRequest":
      data = await prisma.accountRequest.findMany({
        include: { Permissions: true },
      });
      break;
    case "InspectionRequest":
      data = await prisma.inspectionRequest.findMany();
      break;
    case "AddNewActivity":
      data = await prisma.addNewActivity.findMany({
        include: { Activities: true },
      });
      break;
    case "StampLicenseLetter":
      data = await prisma.stampLicense.findMany();
      break;

    default:
      return new BadRequestError("No Table Found");
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
};
