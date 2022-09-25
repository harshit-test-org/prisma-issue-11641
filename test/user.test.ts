import { createMock } from "@golevelup/nestjs-testing";
import { PrismaClient } from "@prisma/client";

createMock<PrismaClient>({
  user: {
    findMany(args?) {
      return Promise.resolve([]);
    }
  }
})
