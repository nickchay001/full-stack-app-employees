/*
  Warnings:

  - You are about to drop the column `adress` on the `Employye` table. All the data in the column will be lost.
  - You are about to drop the column `firstname` on the `Employye` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `Employye` table. All the data in the column will be lost.
  - Added the required column `address` to the `Employye` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Employye` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Employye` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Employye" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Employye_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Employye" ("age", "id", "userId") SELECT "age", "id", "userId" FROM "Employye";
DROP TABLE "Employye";
ALTER TABLE "new_Employye" RENAME TO "Employye";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
