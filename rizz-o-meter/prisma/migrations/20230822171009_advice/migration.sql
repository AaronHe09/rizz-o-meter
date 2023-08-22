-- CreateTable
CREATE TABLE "Advice" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "advice" TEXT NOT NULL,

    CONSTRAINT "Advice_pkey" PRIMARY KEY ("id")
);
