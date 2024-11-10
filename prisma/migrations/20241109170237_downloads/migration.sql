-- CreateTable
CREATE TABLE "Download" (
    "id" SERIAL NOT NULL,
    "range" TEXT,
    "type" TEXT,
    "status" TEXT,
    "path" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Download_pkey" PRIMARY KEY ("id")
);
