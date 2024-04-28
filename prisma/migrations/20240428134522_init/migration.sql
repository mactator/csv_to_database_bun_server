-- CreateTable
CREATE TABLE "NewLicense" (
    "RequestID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "RequestStatus" INTEGER NOT NULL,
    "CompanyName" TEXT NOT NULL,
    "LicenceType" TEXT NOT NULL,
    "IsOffice" BOOLEAN NOT NULL,
    "OfficeName" TEXT NOT NULL,
    "OfficeServiceNumber" TEXT NOT NULL,
    "RequestDate" TEXT NOT NULL,
    "Activities" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "AccountRequest" (
    "RequestID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "RequestStatus" INTEGER NOT NULL,
    "CompanyName" TEXT NOT NULL,
    "RequesterName" TEXT NOT NULL,
    "ApplicantName" TEXT NOT NULL,
    "UserName" TEXT NOT NULL,
    "ContactEmail" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Permission" (
    "ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Permission" TEXT NOT NULL,
    "AccountRequestId" INTEGER NOT NULL,
    CONSTRAINT "Permission_AccountRequestId_fkey" FOREIGN KEY ("AccountRequestId") REFERENCES "AccountRequest" ("RequestID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "InspectionRequest" (
    "RequestID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "RequestStatus" INTEGER NOT NULL,
    "CompanyName" TEXT NOT NULL,
    "InspectionDate" TEXT NOT NULL,
    "InspectionTime" TEXT NOT NULL,
    "InspectionType" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "AddNewActivity" (
    "RequestID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "RequestStatus" INTEGER NOT NULL,
    "CompanyName" TEXT NOT NULL,
    "LicenceID" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Activity" (
    "ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Activity" TEXT NOT NULL,
    "AddNewActivityId" INTEGER NOT NULL,
    CONSTRAINT "Activity_AddNewActivityId_fkey" FOREIGN KEY ("AddNewActivityId") REFERENCES "AddNewActivity" ("RequestID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "StampLicense" (
    "RequestID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "RequestStatus" INTEGER NOT NULL,
    "CompanyName" TEXT NOT NULL,
    "LicenceID" TEXT NOT NULL,
    "RequestDate" TEXT NOT NULL
);
