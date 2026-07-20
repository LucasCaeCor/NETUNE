// src/controllers/test.ts
import prisma from "../db";

export function test() {
  prisma.user.findMany(); // ❌ deve dar erro
}