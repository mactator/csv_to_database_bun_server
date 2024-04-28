export function createPrismaData(
  json: any,
  row: {
    RequestID: string;
    RequestType: string;
    RequestStatus: string;
    RequestData: string;
  }
) {
  return {
    data: {
      ...json,
      RequestID: +row["RequestID"],
      RequestStatus: +row["RequestStatus"],
      Permissions:
        row["RequestType"] == "2"
          ? {
              create: json.Permissions?.map((p: string) => ({
                Permission: p,
              })),
            }
          : undefined,
      Activities:
        row["RequestType"] == "4"
          ? {
              create: json.Activities?.map((a: string) => ({ Activity: a })),
            }
          : json["Activities"],
    },
  };
}
