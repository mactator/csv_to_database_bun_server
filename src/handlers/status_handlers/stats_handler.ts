import type { Handler } from "elysia";
import { prisma } from "../../db/prisma_client";

export const statsHandler: Handler<{
  params: { type: string };
}> = async () => {
  return new Response(
    JSON.stringify({
      NewLicense: await prisma.newLicense.count(),
      AccountRequest: await prisma.accountRequest.count(),
      InsepectionRequest: await prisma.inspectionRequest.count(),
      AddNewActivity: await prisma.addNewActivity.count(),
      StampLicense: await prisma.stampLicense.count(),
    })
  );
};
