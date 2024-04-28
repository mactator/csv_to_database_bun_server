import type { Handler } from "elysia";
import { BadRequestError } from "../../errors/errors";
import parse from "csv-simple-parser";
import { prisma } from "../../db/prisma_client";
import { prismaErrors } from "../../errors/prisma_errors";
import { createPrismaData } from "../../utils/upload/create_prisma_data";

export const uploadFileHandler: Handler = async ({ request: req }) => {
  // check if content type is mulitpart/form-data
  if (!req.headers.get("content-type")?.includes("multipart/form-data"))
    throw new BadRequestError("you have to upload a csv file");

  // get the formData instance
  const formData = await req.formData();

  const file = formData.get("csvFile");

  // check if the value of the csvFile key is a file
  if (!(file instanceof File) || file.type !== "text/csv")
    throw new BadRequestError("you can only upload csv files");

  // assuming the size of the file can handled by the ram
  type Row = {
    RequestID: string;
    RequestType: string;
    RequestStatus: string;
    RequestData: string;
  };
  // insert to the database
  const csv = parse(await file.text(), { header: true }) as Row[];
  const promises = [];
  const failed = [];
  const pushErrors = (i: string) => (e: any) => {
    failed.push({
      line: i,
      errorType: prismaErrors[e.code] ?? e.message,
    });
  };

  // start the timer to get the total time
  const startTime = +new Date();
  for (const i in csv) {
    const row = csv[i];

    // get the data of requestData column
    const data = row["RequestData"];
    const json = JSON.parse(data);

    const prismaData = createPrismaData(json, row);

    switch (row["RequestType"]) {
      case "1":
        promises.push(
          prisma.newLicense.create(prismaData).catch(pushErrors(i))
        );
        break;
      case "2":
        promises.push(
          prisma.accountRequest.create(prismaData).catch(pushErrors(i))
        );
        break;
      case "3":
        promises.push(
          prisma.inspectionRequest.create(prismaData).catch(pushErrors(i))
        );
        break;
      case "4":
        promises.push(
          prisma.addNewActivity.create(prismaData).catch(pushErrors(i))
        );
        break;
      case "5":
        promises.push(
          prisma.stampLicense.create(prismaData).catch(pushErrors(i))
        );
        break;

      default:
        failed.push({
          lineNumber: i,
          errorType: "request type doesn't exist",
        });
        break;
    }
  }

  await Promise.all(promises).catch();

  const endTime = +new Date();
  const totalTime = endTime - startTime;

  return {
    time: `${totalTime} ms`,
    errors: failed,
  };
};
