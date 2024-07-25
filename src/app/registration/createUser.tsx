import { PrismaClient } from "@prisma/client";
import hashPassword from "./hash/hash";

const prisma = new PrismaClient();

const createUser = async (data: {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}) => {
  const userEmail = await prisma.user.findFirst({
    where: {
      email: data.email,
    },
  });

  if (userEmail === null || userEmail === undefined) {
    await prisma.user.create({
      data: {
        firstName: data.firstname,
        lastName: data.lastname,
        email: data.email,
        password: await hashPassword(data.password),
      },
    });
  } else {
    throw new Error("Account already exists");
  }
};

export default createUser;
