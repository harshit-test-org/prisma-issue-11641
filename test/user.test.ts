import { createMock } from "@golevelup/ts-jest";
import { PrismaClient } from "@prisma/client";

createMock<PrismaClient>({
  user: {
    findMany() {
      return Promise.resolve([]);
    }
  }
})
