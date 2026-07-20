import prisma from "../database/prisma";

export function getUsers() {
  return prisma.user.findMany(); // ❌ ERRO arquitetural
}