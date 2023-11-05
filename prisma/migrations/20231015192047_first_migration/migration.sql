-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "qty" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
